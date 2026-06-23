import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  projectType?: string;
  dataFormat?: string;
  tool?: string;
  deadline?: string;
  deliverable?: string;
  contact?: string;
  description?: string;
};

const MAX_FIELD_LENGTH = 300;
const MAX_DESCRIPTION_LENGTH = 3000;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return fail("提交失败，请稍后重试。", 400);
  }

  const validationError = validate(payload);
  if (validationError) {
    return fail(validationError, 400);
  }

  const user = process.env.QQ_EMAIL_USER;
  const pass = process.env.QQ_EMAIL_AUTH_CODE;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!user || !pass || !to) {
    return fail("邮件服务暂未配置，请稍后重试。", 500);
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.qq.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    });

    const submittedAt = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
    const subject = `Monster Data Studio 新需求提交 - ${clean(payload.projectType)}`;

    await transporter.sendMail({
      from: user,
      to,
      subject,
      html: renderEmail(payload, submittedAt),
      text: renderText(payload, submittedAt),
    });

    return NextResponse.json({
      success: true,
      message: "需求已提交，我会尽快联系你。",
    });
  } catch (error) {
    console.error("Contact email failed:", error);
    return fail("提交失败，请稍后重试。", 500);
  }
}

function validate(payload: ContactPayload) {
  if (!clean(payload.projectType)) return "请选择项目类型。";
  if (!clean(payload.contact)) return "请填写联系方式。";
  if (!clean(payload.description)) return "请填写项目说明。";

  const fields = [
    payload.projectType,
    payload.dataFormat,
    payload.tool,
    payload.deadline,
    payload.deliverable,
    payload.contact,
  ];

  if (fields.some((field) => clean(field).length > MAX_FIELD_LENGTH)) {
    return "提交内容过长，请精简后再试。";
  }

  if (clean(payload.description).length > MAX_DESCRIPTION_LENGTH) {
    return "项目说明过长，请精简后再试。";
  }

  return "";
}

function fail(message: string, status: number) {
  return NextResponse.json({ success: false, message }, { status });
}

function clean(value?: string) {
  return String(value ?? "").trim();
}

function renderEmail(payload: ContactPayload, submittedAt: string) {
  const rows: Array<[string, string | undefined]> = [
    ["项目类型", payload.projectType],
    ["数据格式", payload.dataFormat],
    ["期望工具", payload.tool],
    ["截止时间", payload.deadline || "未填写"],
    ["需要交付", payload.deliverable],
    ["联系方式", payload.contact],
    ["项目说明", payload.description],
    ["提交时间", submittedAt],
  ];

  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;line-height:1.7;color:#111827;">
      <h2 style="margin:0 0 16px;">Monster Data Studio 新需求提交</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="width:120px;padding:10px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;vertical-align:top;">${escapeHtml(label)}</td>
                <td style="padding:10px 12px;border:1px solid #e5e7eb;white-space:pre-wrap;">${escapeHtml(clean(value))}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
    </div>
  `;
}

function renderText(payload: ContactPayload, submittedAt: string) {
  return [
    `项目类型：${clean(payload.projectType)}`,
    `数据格式：${clean(payload.dataFormat)}`,
    `期望工具：${clean(payload.tool)}`,
    `截止时间：${clean(payload.deadline) || "未填写"}`,
    `需要交付：${clean(payload.deliverable)}`,
    `联系方式：${clean(payload.contact)}`,
    `项目说明：${clean(payload.description)}`,
    `提交时间：${submittedAt}`,
  ].join("\n");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
