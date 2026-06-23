export const navItems = [
  { label: "服务", href: "services" },
  { label: "作品", href: "works" },
  { label: "流程", href: "process" },
  { label: "关于", href: "about" },
  { label: "联系", href: "contact" },
];

export const services = [
  {
    title: "数据清洗",
    text: "处理缺失值、异常值、重复值，统一字段格式，构建分析变量。",
  },
  {
    title: "统计分析",
    text: "描述性统计、分组比较、相关性分析、t 检验、卡方检验、方差分析。",
  },
  {
    title: "回归建模",
    text: "线性回归、Logistic 回归、面板模型、固定效应、稳健性检验。",
  },
  {
    title: "机器学习",
    text: "随机森林、XGBoost、聚类、预测模型、特征重要性、SHAP 分析。",
  },
  {
    title: "可视化图表",
    text: "使用 Python / R / Excel 生成论文图表、商业图表、趋势图和数据看板。",
  },
  {
    title: "报告交付",
    text: "整理 Word 分析报告、PPT 汇报材料、Jupyter Notebook 和可复现代码。",
  },
];

export const works = [
  {
    title: "多变量时间序列销量预测",
    complexity: "Advanced",
    chart: "forecast",
    tags: ["LSTM", "Rolling Forecast", "Feature Engineering", "RMSE", "MAPE"],
    text: "基于历史销量、时间特征和外部变量构建预测模型，完成滚动预测、误差评估和趋势解释。",
    problem: "未来销量趋势预测与误差评估",
    workflow: ["数据清洗", "时间特征构建", "LSTM 建模", "滚动预测", "误差评估", "报告解释"],
    metrics: ["RMSE", "MAPE", "MAE"],
    deliverables: ["Notebook", "预测图", "误差表", "Word 报告"],
    background: "面向销量、需求量或业务指标的时序预测任务，重点处理季节性、趋势变化和外部变量影响。",
    dataType: "历史销量表、时间字段、活动/价格/宏观等外部变量",
    goal: "输出可解释的未来趋势、误差范围和可复现预测流程。",
  },
  {
    title: "用户生命周期与流失预测",
    complexity: "Business",
    chart: "churn",
    tags: ["RFM", "Churn Prediction", "XGBoost", "SHAP", "Segmentation"],
    text: "结合用户消费行为构建用户价值分层和流失预测模型，输出用户画像、流失概率和运营建议。",
    problem: "哪些用户有流失风险，哪些用户值得重点维护",
    workflow: ["RFM 指标", "用户分群", "流失标签构建", "XGBoost 分类", "SHAP 解释", "策略输出"],
    metrics: ["AUC", "F1", "Recall"],
    deliverables: ["用户分层表", "模型结果", "策略建议", "Notebook"],
    background: "面向会员、电商或订阅业务的用户经营任务，兼顾分群、预测和策略解释。",
    dataType: "用户交易记录、访问行为、消费频次、最近一次行为时间",
    goal: "识别高价值用户和潜在流失用户，并给出可执行运营建议。",
  },
  {
    title: "医学风险预测模型",
    complexity: "Research",
    chart: "medical",
    tags: ["Logistic", "XGBoost", "ROC", "Calibration", "DCA", "OR Table"],
    text: "基于研究数据完成风险因素分析和模型评估，仅提供统计分析支持，不替代医学判断。",
    problem: "识别风险因素并评估模型预测能力",
    workflow: ["变量筛选", "Logistic 回归", "XGBoost", "ROC", "校准曲线", "DCA", "SHAP 解释"],
    metrics: ["AUC", "Brier Score", "OR", "95%CI"],
    deliverables: ["模型表", "ROC 图", "校准图", "SHAP 图", "Word 报告"],
    background: "面向研究数据的风险因素筛选、预测模型构建和解释性分析。",
    dataType: "研究样本表、结局变量、人口学变量、实验或临床指标",
    goal: "形成风险因素解释、模型性能评估和论文/报告可用图表。",
  },
  {
    title: "问卷结构方程 / 信效度 / 中介调节分析",
    complexity: "Research",
    chart: "survey",
    tags: ["Reliability", "Validity", "SEM", "Mediation", "Moderation", "ANOVA"],
    text: "对问卷数据进行清洗、信效度检验、因子结构分析、差异检验和中介调节模型分析。",
    problem: "问卷量表是否可靠，不同群体是否存在差异，变量之间是否存在机制关系",
    workflow: ["问卷清洗", "信度检验", "效度检验", "因子分析", "差异检验", "中介/调节模型"],
    metrics: ["Cronbach's Alpha", "KMO", "AVE", "CR", "p-value"],
    deliverables: ["SPSS 结果", "模型图", "三线表", "Word 报告"],
    background: "面向问卷、量表和研究模型的统计分析任务，强调量表质量和变量机制解释。",
    dataType: "问卷原始数据、量表题项、分组变量、研究假设",
    goal: "输出信效度结果、模型路径、差异检验和可直接整理进报告的表格。",
  },
  {
    title: "文本主题建模与情感分析",
    complexity: "Advanced",
    chart: "text",
    tags: ["Text Cleaning", "LDA", "BERTopic", "Sentiment", "Word Frequency"],
    text: "对评论文本进行清洗和主题识别，提取核心话题、情感倾向和代表性评论，形成文本分析报告。",
    problem: "用户主要讨论什么，情绪倾向如何，哪些主题最集中",
    workflow: ["文本清洗", "分词/去噪", "词频统计", "主题建模", "情感分析", "代表评论提取"],
    metrics: ["Topic Count", "Sentiment Ratio", "Keyword Frequency"],
    deliverables: ["清洗文本", "主题表", "词频图", "情感图", "Word 报告"],
    background: "面向评论、访谈、社媒或开放题文本的主题提取和情感洞察任务。",
    dataType: "评论文本、时间字段、评分字段、来源渠道",
    goal: "提炼主要主题、情感结构和代表性证据，形成可读的文本分析报告。",
  },
  {
    title: "空间数据与交互地图分析",
    complexity: "Business",
    chart: "gis",
    tags: ["GIS", "GeoPandas", "Spatial Join", "Heatmap", "Leaflet"],
    text: "整合空间边界、环境指标和统计数据，构建空间指标体系，并制作交互式地图和可视化分析页面。",
    problem: "空间指标如何分布，不同区域是否存在差异和聚集特征",
    workflow: ["空间数据清洗", "坐标统一", "空间连接", "指标构建", "热力图", "Leaflet 交互地图"],
    metrics: ["Coverage", "Distance", "Density", "Spatial Index"],
    deliverables: ["GeoJSON", "HTML 地图", "指标表", "分析报告"],
    background: "面向城市、环境、门店、热风险或区域指标的空间统计和交互可视化任务。",
    dataType: "空间边界、经纬度点位、环境指标、区域统计表",
    goal: "建立空间指标体系，展示分布差异，并交付可查看的交互地图。",
  },
];

export const processSteps = [
  ["提交需求", "说明数据类型、分析目标、截止时间和期望交付物。"],
  ["检查数据", "判断字段结构、样本量、缺失情况、异常值和可分析程度。"],
  ["确认方案", "确定分析方法、图表类型、报告结构、交付周期和修改范围。"],
  ["执行分析", "完成数据清洗、建模、可视化、结果解释和文件整理。"],
  ["交付修改", "提供代码、图表、数据结果和报告，并根据约定进行调整。"],
];

export const analysisStack = [
  {
    title: "Data Pipeline",
    cn: "数据处理链路",
    problem: "原始数据混乱、字段不统一、缺失值多、变量无法直接建模。",
    methods: ["数据读取", "字段整理", "缺失值处理", "异常值识别", "重复值处理", "变量构建", "宽长表转换", "数据字典"],
    outputs: ["清洗后数据表", "变量说明", "缺失值报告", "数据质量检查结果"],
  },
  {
    title: "Statistical Inference",
    cn: "统计推断",
    problem: "需要比较组间差异、判断变量关系、输出论文或报告中的统计结果。",
    methods: ["描述性统计", "t 检验", "卡方检验", "方差分析", "相关分析", "置信区间", "效应量", "稳健性检验"],
    outputs: ["描述性统计表", "差异检验表", "相关性矩阵", "三线表", "结果解释"],
  },
  {
    title: "Modeling & Prediction",
    cn: "建模预测",
    problem: "需要预测结果、识别风险因素、判断影响因素、构建分类或回归模型。",
    methods: ["线性回归", "Logistic 回归", "面板模型", "随机森林", "XGBoost", "LightGBM", "LSTM", "交叉验证", "模型调参"],
    outputs: ["模型结果表", "预测结果", "性能指标", "模型对比", "可复现代码"],
  },
  {
    title: "Explainability & Validation",
    cn: "模型解释与验证",
    problem: "需要证明模型可靠、解释变量贡献、回答为什么模型这么判断。",
    methods: ["ROC", "AUC", "混淆矩阵", "Calibration", "DCA", "SHAP", "特征重要性", "残差诊断", "稳健性检验"],
    outputs: ["ROC 曲线", "校准曲线", "SHAP 图", "模型诊断图", "验证报告"],
  },
  {
    title: "Visualization & Delivery",
    cn: "可视化交付",
    problem: "需要把分析结果变成客户能看懂、能汇报、能复现的文件。",
    methods: ["论文图表", "商业图表", "热力图", "地图", "交互式 Dashboard", "自动化报告", "Notebook 整理"],
    outputs: ["Word 报告", "PPT", "Jupyter Notebook", "Excel 结果表", "HTML 页面", "可复现项目包"],
  },
];

export const faqs = [
  ["我只有原始 Excel，不知道该怎么分析，可以做吗？", "可以。可以先根据字段、样本量和研究目标判断适合的分析方法，再整理分析方案。"],
  ["数据很乱、字段很多、缺失值也多，可以处理吗？", "可以。会先做数据质量检查，包括缺失、重复、异常、变量类型和字段逻辑，再决定后续分析方式。"],
  ["可以只做代码，不写报告吗？", "可以。可以只交付 Notebook、Python 脚本、R 脚本、Stata do 文件或 Excel 结果表。"],
  ["可以只写报告，不提供代码吗？", "可以。但更推荐保留可复现代码，方便后续检查和修改。"],
  ["结果不显著怎么办？", "不承诺伪造数据或人为制造显著结果。可以从变量构建、模型设定、稳健性检验和结果解释角度提供合理处理方案。"],
  ["如何判断应该用统计模型还是机器学习？", "会根据研究目标、样本量、变量类型、是否需要解释性、是否需要预测效果来判断。偏解释的问题通常优先统计模型，偏预测的问题可以考虑机器学习。"],
  ["可以帮我设计分析思路吗？", "可以。对于还没有明确方法的项目，可以先根据研究问题、数据结构和交付要求设计分析框架。"],
  ["可以做稳健性检验和模型解释吗？", "可以。可以根据项目需要加入稳健性检验、变量替换、模型对比、SHAP、ROC、校准曲线等分析。"],
  ["交付内容一般包括什么？", "根据项目不同，常见交付包括清洗后数据、代码、图表、模型结果表、Word 报告、PPT 或完整项目包。"],
  ["多久可以交付？", "小型任务一般 1-3 天，中型任务一般 3-7 天，复杂建模、论文级分析或网页可视化需要单独评估。"],
  ["数据会不会公开？", "不会公开客户原始数据、身份信息和项目细节。作品展示会进行脱敏处理，只展示方法和交付形式。"],
  ["可以做论文数据分析吗？", "可以提供数据清洗、统计分析、模型复现、图表制作和结果解释支持，但不提供伪造数据或不当学术承诺。"],
];

export const faqPromises = [
  ["数据脱敏", "不公开客户原始数据、身份信息和项目细节。"],
  ["可复现交付", "尽量保留代码、结果表和分析过程，方便复查和修改。"],
  ["不伪造结果", "不承诺人为制造显著结果，只提供合理分析和解释。"],
];

export const formOptions = {
  projectType: ["数据清洗", "统计分析", "回归建模", "机器学习", "可视化图表", "分析报告", "其他"],
  dataFormat: ["Excel", "CSV", "SPSS", "Stata", "SQL 数据库", "文本数据", "其他"],
  tool: ["Python", "R", "Stata", "SPSS", "Excel", "不限"],
  deliverable: ["清洗后数据", "代码", "图表", "Word 报告", "PPT", "Notebook", "完整项目包"],
};
