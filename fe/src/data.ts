/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TeamMember, Milestone, CaseStudy, SolutionOption } from "./types";

export const IMAGES = {
  heroOffice:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCBjMpg1ZGpYW4wn7AVsEZ8B8bkNCUDaNJ0mBXBrGADu95-Gk8skOpyHlHjtZ7OECfvr5-LVw2REjn6_jPs9g5Ki8Db308TnNLlL0Fiq9RAMwoEisUSJpuSRnYakUweYbHwhFcwpVcmAP9yfNlK68CTN0Y_kSlWzJhvaeUyK2L-1_0T5jeUd_GRFWhzFmPvkaQO0k3PtYfpT_vTmECSeYi2bATiIPdCoPSafJ-V0W4FBi7xC5DczREqsIIT8aEJ8Ox38PhnKmtIPuMD",
  laptopWindow:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC0ra_VWHwkora93HiivqmmLeClfw-lu3Smhw8JRN995yN1bLKKCwQICg9MXn4SIrnFgJjYQk25k-Z4Bh93mRhjoPAAzsntIRQY5vquVLIMhxUne1_bI-1SrHPKo4owjwWJ9P3oIrpky-16EZJmSItxiLmTLlThcBmTsEmOJF4ch3YmHbG3G81T2jPR8RgAEw1uWfS1lEeTje1CPyZayeWQ07SWgCkwgWKGcGFOFE4-aASJ1dT_o4iuRxgM10mbtpZyI4XDrActWkbe",
  analysisDashboard:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCM_PuXhD_K-9-oUiuJML_tfAp59tpWFtpOgpr9HdDqqLhS1hzPvRyphl7V2GVVdNHawrCaG4ttxjhYkRwEzZJcF3AcA-nbgqCHgklYKHYqeVQ6pSk7xwXW59sn5wDnOK5WhAmlE83vm_G8l0_N5JcBaXMsnwt6vpC_3wlNpUT3sHXaCJgKra66XUS_m585Qv5N5wdg8XoriMFR-3ABIwlNYgdVfY9xhUwyhpWOaSxc2eixyYPrHiojLvuaJAaX45AEvwqaQD-J8HnL",
  lightSkyscraper:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDK0-t6_sN-833sxTedlr510zjyEB7vH-6mGLXxk7ukVzR6JPQMsJvewOE12hVmRvCTOIfUcHfeHOSA5QHdacf_yjWMo_VMTPlmDTE6DW2WkDIfPsokrY6jhXf-lyT1-03az26aL8Czhr7eZoRlNlb39ricpegXuQnRIdFKX7oSxtUcl--hKjkdPLCZ5vhiMWHRKHTDqs3iR0OzO2OeSSi2UHC5aHz-M0WsFKyd6L2KZg48PDNbawPJJA-5JlAR8rgMXldIwxZKLbC9",
  blueSkyscraper:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD0lL4nIcX48_O6UiB5Nd90vj4hzvBSwXh1xwfm8cJ95sccy34vDVb7yHgUKbAkd5-hhDGPm7A7gUIpistQjFiB3c-9uKh3ao6nBPgAVbTRav-s0bXFUrKmaz5VQYHse3ZMp61BNawobiFNTos6zClUan4OPUPtPuwr4vtVh_IyQtttOShNc65MJOC_irAdpJM_g4PhEZI6oxRLFIyyLTL-q_7CKB9wyYoGmcEG8E4nCqP8f9ZLRyiukqqMquOdvB2O23oZQhIy9wfu",
  warehouseRobotics:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBP0_qqaxqw2eqe04_UQYovA7eiXBWB5uCLQ2dC1MJfIWdpzn0NptT3FtbgEyK2uOLr1QPvPvbdUdhjyaEjJO5nxyMxmLgi5lEr8ffodTyLJ95D9UJIweYcwD95i59GbN_PBo4_fOgFCnmbCFGDmVvePTa_lUzqc3IZrT2D2wWU-Lc4s1bvtSaMWbwa6Ny2i5oa8ACI4lihzmcXHdXoYH5aEKEERzqWkdC3l4DA49Ssx8pHsFfZqkqQCc4XHZktoUh3omatA1e1xhEl",
  healthLab:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC501sFwJzdRTeI07ipHiMntmPFfhg46aFmG7AUEhSt_XwwsmdHpY_ZVIUgfaCMOzViapOc0WGEZnrJFLmvcEultLYF2C8VFm2ekWZQLXiWviEB50SyK1OE0PBUWqZtvvyCauo67PPhs1R5r_AFiqtDb6vqgt1-O5QcznbPqSSYX6-6faTwE25g5hZPlknerLny_qquTSWxPlRCy1g4gdsOXEnS-tSMBAF9rnScv7G7Z7JiqFnu1RMN9RRYezmnRHbdixTND98_OtNs",
  officeSkyline:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBtnGRejQ-f2AI7FIU7pmlDux4_oqV_GY6wp7tq5i4lt3y0eYJHQNFNXpfwLhUW6VRC_SeiS4bmcYG-RZa3l6dGJG34QW_mlMQQUCURMpEZ_kY7ZxB0srfXERW7mvt-F8He363v3hzRP4g5qUnUCRvrfFRM6QT1f4TbRtRs7NezkYhfrTRiRMStTVfkNPVX3aKXyx1KVUUSepkOFujC3PLdU3gS81Yo46vn2xMq6zhbrjURb_9JEoGnhEKH5uSE2wepAB75vZlTkD6O",
  ctoKhiem:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBPRu_OY6PmARRdPT_RZM0uMSbcPM6bC6ggV2_5M7d6HYwUdo30qFnCkLX3ktWrKXejgbSX0ixvfpmz2w9S7d-MiNdO_8cTgUHedzbJ0I5-ABbAsxPuGQFSsOfKL9XbAygXktPLSr-zOzMQWccUAn_Ik9oEGROJCNRpUfcwuoYhyfHdirrxI5CUoHuUzQqoccScEY98pPlA6lqJJKKuo96yEBVpBlgQ0lAowObdx-JJHvzzoAT0roNT0ZXruwJ6vWQ8B_PkQWCPoaqU",
  qualityT:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC9DKQsEok8_7A8fWbvtyel71pGDCFbePww0l8KhIjQq8-Fu2XkqdE-90D5xyHR1bwKCknKS4kSp5aZiVBNlRSXcHVyYCk4CRk_DgnmqBFwZWsHCJTpeOG05SyzmgrI6AIpm1oQjaJijxf5ylxYt1IiyY2dSmSCeq-lAcU3OHY0aTzx1ZNSrft49htgMSq7AgFtzu85GOl7SVeYV_rmXjzmoZlIWg3IJZ5x2buLwChfxaHHRPtVXdQYAVOENU09buY8wY2mlMX-7r18",
  cloudN:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDqOLn0i1r4mi2haTzvQPIE-XbhLYuqKc56DaW9a99geMXJyckq0n8zuofpad4FYBRXUfanf_yB-CRsOyGNsUDLL5-ixY5ySG96mEYU3dYQfVvomv2PBecTGd6U7Etkrwly6L7p9Z3nOPcxMmJCKF7C6lIPTYB_Me_ezjYaG1jvs9n3YgwAT_j0rw54jMhRrZj73iEP6YKKQsu4siB56yCPz6K-XOb6WT4UaJLx0cYrCg9OL1h-6hvIBmQsLGk7JMajkb8OJhv5SHQF",
  salesL:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCqzrKNoV6hhiSxj5lVUQD95UL8hvOqKndyDQDdyEagc5g7V4mdc_JC762ZA_rPlJI6Asa-pFwYUBSfOxaSdJxF1qO_2jngp92CmD65cnPSV7i5ND_oqcV8IoPws3t5z7Bsuteg0j8beyjO_gFhA-1qrqLTUMV4jkb7jTBiG-crewx0_m6ZmN-OtETAWv38u-kBz1er8XwuKFDwbS5lRLNUHc8dBQJl6Cefuecb79d0bfQ_BdHzU_QqvXbX2XEjANdcwoZ0Lt7F695N",
  laptopCode:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBhkOT6enCI0VBxU5wp_UOfMo-2BK3Sr0VssNlrfff1oQYt9rGOj-kSIUt7F0sra9sxwAFnif0qf3-vsltoIdEu46fdBC5tlddtZF2xy7Gb0GPTs5zyvnDEK2E-88yC98TeJWnnPNSm0mVXC65tNgTdc36GoC2sJzMEgbeyd5LbO7nHUntbs0gs5xruOjcCV7vAyzD-AfYS5-ZAh44CRWwys53sd3fjj72-VS3xOHXdOLc85YY4q1nDX7mn8r9Xu5jSbRxBDNNSkNDk",
  teamMeeting:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD_cIcx4XU4estLk8UP7CAijx79XaE_qAUIjX_GV48_j7-WABREH9zUHkGMpCzgGJMnh3IOcrF9EcXszeuUPtFQPRinljasdW1c-MRH_blmTdByNYrFaYVSfqxk49H-kZH4WJYxRdWQE1qNgkKU4Py0op4VQz-mZiE0ropZkI4oJ6A2Ht1ELVbYYcDP0tnDaRsAiVTN80iDlyGwoqgQIw2FPfm2vJjgc-_HSxHw4DGcTjtDoxOf86twPzV_wsZf2InQcuV6hyER_rw9",
};

export const TRANSLATIONS = {
  en: {
    brand: "KORIX",
    navHome: "Home",
    navSolutions: "Solutions",
    navAbout: "About Us",
    navServices: "Services",
    ctaInquire: "Inquire Now",
    ctaBookBriefing: "Book a Briefing",
    ctaExploreSolutions: "Explore Solutions",
    ctaInquireTitle: "Start Your Project",

    // Home Tab
    heroTitle: "SCALABLE ENGINEERING MEETS MODERN UI/UX",
    heroSubtitle:
      "We design and build bespoke software, cloud-native architectures, and intelligence-driven products that empower enterprises to grow at pace and scale securely.",
    uptimeBadge: "99.99% Uptime SLA",
    projectsBadge: "250+ Deployed Systems",
    engineersBadge: "100+ Senior Devs",

    missionLabel: "OUR MISSION",
    missionTitle: "Redefining the Future Through Streamlined Technology",
    missionDesc:
      "We bridge the gap between high-complexity software engineering and intuitive human experiences. We don't just write robust code; we design architectural foundations that withstand mass scaling, eliminate operational friction, and offer spectacular visual interfaces.",

    servicesTitle: "Our Core Services",
    servicesSubtitle:
      "A perfect blend of enterprise-grade reliability and seamless user journeys",
    service1Title: "Enterprise Software & Cloud Platforms",
    service1Desc:
      "Custom web applications, robust microservices, API ecosystem designs, and distributed transaction pipelines.",
    service2Title: "Modern UI/UX Design Systems",
    service2Desc:
      "Clean visual guidelines, motion-driven micro-interactions, complex UI wireframes, and high-fidelity design-to-code components.",
    service3Title: "Cloud Native Architecture & Scaling",
    service3Desc:
      "Seamless AWS/GCP migration, serverless microservices pipelines, secure enterprise networking, and zero-downtime environments.",
    service4Title: "Strategic Engineering Advisory",
    service4Desc:
      "Technological stack audits, agile deployment optimization, system scalability diagnostics, and fractional CTO advisory.",

    footerCtaTitle: "Ready to transform your vision into reality?",
    footerCtaDesc:
      "Talk to our lead engineers today to receive a technical blueprint, tailored system architecture schema, and custom milestones estimate.",
    footerCtaBtn: "Schedule Technical Briefing",

    // Solutions Tab
    solutionsHeroTitle: "BREAKTHROUGH SOLUTIONS FOR THE DIGITAL AGE",
    solutionsHeroDesc:
      "Korix provides an advanced ecosystem of software solutions, from enterprise-grade AI automation, containerized architectures, to high-performance real-time data analytical engines.",
    ecosystemTitle: "The Korix Solutions Ecosystem",
    ecosystemSubtitle:
      "Powering real business outcomes with battle-tested tech foundations",
    sol1Title: "AI & Industrial Automation",
    sol1Desc:
      "Optimize floor operations, streamline raw pipelines, and implement computer vision systems. Leveraged in automatic packaging and robotic hubs.",
    sol2Title: "Cloud Ecosystem & Distributed Systems",
    sol2Desc:
      "Multi-region fallback architectures, self-healing Docker/Kubernetes configurations, and robust high-availability backends.",
    sol3Title: "Data Analytics & Core Intelligence",
    sol3Desc:
      "Harness real-time big data pipelines, machine learning forecasting engines, and executive dashboard rooms.",
    sol4Title: "Digital Healthcare & Record Systems",
    sol4Desc:
      "Bespoke HIPAA-compliant patient recording, distributed clinical database sync, and modern telemedicine setups.",

    caseStudiesTitle: "Customer Success Stories",
    caseStudiesSubtitle:
      "Real numbers achieved by partners running on Korix technology",

    // About Tab
    aboutHeroTitle: "REDEFINING THE FUTURE WITH SIMPLE, SOPHISTICATED TECH.",
    aboutHeroDesc:
      "Founded by a high-performing group of Silicon Valley veterans and R&D engineers, Korix was built with a singular vision: to model complex problems into simple, durable software architectures.",
    timelineTitle: "Our Strategic Evolution",
    timelineSubtitle:
      "Reflecting on major landmarks, clients acquired, and structural growth",
    teamTitle: "Engineering Leadership",
    teamSubtitle:
      "Meet the veterans driving our technological roadmap, creative designs, and R&D pipelines",
    partnersTitle: "Co-Designing Success with Leading Marks",

    // Services Tab
    servicesHeroTitle: "ELEVATE YOUR BUSINESS WITH EXTRAORDINARY TECH",
    servicesHeroDesc:
      "From meticulous requirements gathering to system deployment and continuous maintenance, we offer a clean, reliable, and automated delivery pipeline.",
    techStackTitle: "Modern Technology Suite",
    techStackSubtitle:
      "We build using robust, modern, and highly-performant tools",
    processTitle: "Our Structured Delivery Journey",
    processSubtitle:
      "A modular, predictable process that eliminates uncertainty from launch",
    process1Title: "1. Diagnostic & Specs",
    process1Desc:
      "Deep-dive workshops to outline architectural constraints, database requirements, and custom client flows.",
    process2Title: "2. Strategic Design",
    process2Desc:
      "We construct high-fidelity UI designs and architectural diagrams mapping out services, security nodes, and API gates.",
    process3Title: "3. Clean-Code Delivery",
    process3Desc:
      "Fast-paced agile sprint cycles with continuous integration, unit trials, and robust test pipelines.",
    process4Title: "4. Deployment & Guard",
    process4Desc:
      "Gradual rollouts onto reliable cloud platforms, backed by 24/7 logging setups, automated alarms, and continuous support.",

    trustTitle: "Why Enterprise Leaders Partner with Korix?",
    trustSubtitle:
      "We hold ourselves to a standard that goes beyond mere code deployment website structures",
    trust1Title: "Uncompromising Code Quality",
    trust1Desc:
      "Clean architectures, complete type-safety, and performance metrics optimized down to the millisecond.",
    trust2Title: "Precise Timelines",
    trust2Desc:
      "Rigorous milestone management with clear sprint reports, avoiding delays and budget slips completely.",
    trust3Title: "Lifetime Dedication",
    trust3Desc:
      "Our systems evolve side-by-side with your company, backed by proactive upgrade schedules and direct Slack access.",

    // Interactive Elements
    calculatorTitle: "Interactive Cost & Stack Architect",
    calculatorDesc:
      "Select your project specifications to dynamically visualize the optimal hosting framework, draft timeline, and estimated engineering sprint cost.",
    selectCategory: "Choose Solution Module",
    estimatedUsers: "Estimated Active Users / month",
    databaseScale: "Database Shards Required",
    projectSpeed: "Deployment Speed Preference",
    speedStandard: "Standard (8-12 weeks)",
    speedExpedited: "Expedited (4-6 weeks)",
    speedHyper: "Express (3 weeks - Rapid Launch)",
    optimalStack: "Recommended Tech Stack",
    estimatedTime: "Estimated Blueprint Sprints",
    estimatedBudget: "Estimated Engineering Budget",
    getBlueprintBtn: "Generate Custom Specs Blueprint",

    // Consultation Form
    formStep1: "Project Type",
    formStep2: "Organization details",
    formStep3: "Consult Schedule",
    formName: "Full Name",
    formEmail: "Business Email",
    formCompany: "Company Name",
    formRequirements: "Primary Technical Requirements",
    formDate: "Preferred Zoom/Google Meet Date",
    formDatePlaceholder: "Select a date",
    formMessage: "Additional Context / Current Challenges",
    formSubmit: "Book Consulting Appointment",
    formSuccess:
      "Consultation Request Scheduled! Our principal solutions architect will reach out via email with an agenda calendar within 2 hours.",
    btnNext: "Next Step",
    btnPrev: "Previous",
  },
  vi: {
    brand: "KORIX",
    navHome: "Trang chủ",
    navSolutions: "Hệ Sinh Thái Giải Pháp",
    navAbout: "Về Korix",
    navServices: "Dịch Vụ Chuyên Nghiệp",
    ctaInquire: "Gửi Yêu Cầu",
    ctaBookBriefing: "Đặt Lịch Khảo Sát",
    ctaExploreSolutions: "Khám Phá Giải Pháp",
    ctaInquireTitle: "Khởi Động Dự Án Của Bạn",

    // Home Tab
    heroTitle: "KIẾN TRÚC CÔNG NGHỆ VƯỢT TRỘI GẶP GỠ TRẢI NGHIỆM ĐỈNH CAO",
    heroSubtitle:
      "Chúng tôi thiết kế và phát triển các phần mềm chuyên biệt, kiến trúc đám mây chuẩn doanh nghiệp và sản phẩm tích hợp trí tuệ nhân tạo vượt trội.",
    uptimeBadge: "99.99% Cam kết Hoạt động",
    projectsBadge: "250+ Hệ thống Hoàn thành",
    engineersBadge: "100+ Kỹ sư Cấp cao",

    missionLabel: "SỨ MỆNH CỦA CHÚNG TÔI",
    missionTitle: "Định nghĩa lại tương lai thông qua công nghệ tinh giản",
    missionDesc:
      "Chúng tôi rút ngắn khoảng cách giữa kiến trúc phần mềm phức tạp và trải nghiệm người dùng tự nhiên. Korix không chỉ tạo ra dòng code vững chắc; chúng tôi kiến tạo các hạ tầng bền bỉ, giúp doanh nghiệp bứt phá mà không gặp rào cản vận hành.",

    servicesTitle: "Giải Pháp Cốt Lõi",
    servicesSubtitle:
      "Sự kết hợp hoàn hảo giữa hiệu năng đỉnh cao và thiết kế tinh tế",
    service1Title: "Phần Mềm Doanh Nghiệp & Nền Tảng Cloud",
    service1Desc:
      "Phát triển app chuyên sâu cho web/mobile, kiến trúc microservices và cổng thanh toán quy mô lớn bảo mật.",
    service2Title: "Hệ Thống Thiết Kế UI/UX can đối",
    service2Desc:
      "Xây dựng các bộ design system nhất quán, hiệu ứng chuyển động mượt mà và chuyển đổi Figma-to-Code nguyên bản.",
    service3Title: "Tối Ưu & Quy Hoạch Hạ Tầng Cloud Native",
    service3Desc:
      "Dịch chuyển dữ liệu lên AWS/GCP, thiết kế hệ thống phân tán chịu tải cao và cơ chế tự động phục hồi.",
    service4Title: "Tư Vấn Chiến Lược & Định Hướng Công Nghệ",
    service4Desc:
      "Đánh giá chất lượng mã nguồn, phát hiện lỗ hổng hệ thống và cung cấp giải pháp CTO thuê ngoài chuyên nghiệp.",

    footerCtaTitle: "Bạn đã sẵn sàng hiện thực hóa tầm nhìn của mình?",
    footerCtaDesc:
      "Hãy kết nối với các kỹ sư trưởng của chúng tôi hôm nay để nhận blueprint kỹ thuật chi tiết cùng báo giá sơ bộ.",
    footerCtaBtn: "Đặt Lịch Tư Vấn Kỹ Thuật",

    // Solutions Tab
    solutionsHeroTitle: "GIẢI PHÁP ĐỘT PHÁ CHO KỶ NGUYÊN SỐ",
    solutionsHeroDesc:
      "Korix cung cấp hệ sinh thái giải pháp công nghệ toàn diện, từ hạ tầng điện toán đám mây đa nền tảng, AI tự động hóa thông minh đến quản trị dữ liệu quy mô toàn cầu.",
    ecosystemTitle: "Hệ Sinh Thái Giải Pháp",
    ecosystemSubtitle:
      "Hiện thực hóa doanh thu và gia tăng hiệu suất vận hành thực tế",
    sol1Title: "Hạ Tầng AI & Tự Động Hóa Kho Vận",
    sol1Desc:
      "Tự động hóa dây chuyền, áp dụng thị giác máy tính nhận diện robot, giảm thiểu 80% sai sót quy trình đóng gói.",
    sol2Title: "Điện Toán Đám Mây & Kiến Trúc Microservices",
    sol2Desc:
      "Môi trường phân tán Kubernetes tự động nhân bản, cam kết duy trì hiệu năng mượt mà kể cả khi lượng truy cập tăng vọt.",
    sol3Title: "Quản Trị & Phân Tích Dữ Liệu Chuyên Sâu",
    sol3Desc:
      "Thu thập dòng dữ liệu thời gian thực, trực quan hóa sức khỏe doanh nghiệp thông qua hệ thống dashboard room tự động.",
    sol4Title: "Nền Tảng Y Tế & Lưu Trữ Số Hóa",
    sol4Desc:
      "Lưu giữ hồ sơ bệnh án liên thông thông minh, bảo mật tuyệt đối thông tin nhạy cảm theo chuẩn y tế quốc tế.",

    caseStudiesTitle: "Thành Công Của Khách Hàng",
    caseStudiesSubtitle:
      "Những con số biết nói từ các đối tác đồng hành cùng Korix",

    // About Tab
    aboutHeroTitle: "ĐỊNH NGHĨA LẠI TƯƠNG LAI THÔNG QUA CÔNG NGHỆ TINH GIẢN.",
    aboutHeroDesc:
      "Thành lập bài bản bởi các nhà nghiên cứu và kỹ sư hàng đầu từ Thung lũng Silicon, Korix sinh ra để chuyển hóa các thách thức hóc búa thành giải pháp phần mềm tinh gọn, dễ sử dụng.",
    timelineTitle: "Hành Trình Phát Triển",
    timelineSubtitle:
      "Những cột mốc quan trọng đánh dấu sự trưởng thành và bứt phá của Korix qua từng năm",
    teamTitle: "Đội Ngũ Lãnh Đạo",
    teamSubtitle:
      "Gặp gỡ tập thể quản lý tài năng đứng sau các định hướng kiến trúc đột phá của Korix",
    partnersTitle: "Đối Tác Đồng Hành",

    // Services Tab
    servicesHeroTitle: "NÂNG TẦM DOANH NGHIỆP VỚI CÔNG NGHỆ ĐỘT PHÁ",
    servicesHeroDesc:
      "Chúng tôi cung cấp dịch vụ phát triển phần mềm trọn gói, từ bước lên cấu trúc ý tưởng đến triển khai hạ tầng đám mây và tối ưu hóa vận hành.",
    techStackTitle: "Hệ Sinh Thái Công Nghệ Hiện Đại",
    techStackSubtitle:
      "Chúng tôi xây dựng sản phẩm dựa trên các công nghệ tiên tiến nhất thị trường hiện nay",
    processTitle: "Quy Trình Làm Việc Tiêu Chuẩn",
    processSubtitle:
      "Tiến trình chuyên nghiệp giúp quản trị rủi ro tối đa và đảm bảo tiến độ bàn giao",
    process1Title: "1. Khảo sát & Tư vấn",
    process1Desc:
      "Thảo luận chi tiết để làm rõ bài toán nghiệp vụ, xác định ngân sách dự kiến và kiến trúc ban đầu.",
    process2Title: "2. Thiết kế Kiến trúc",
    process2Desc:
      "Thiết kế giao diện UI chi tiết kèm sơ đồ luồng dữ liệu, hạ tầng ảo hóa trước khi bước vào code.",
    process3Title: "3. Phát triển Agile",
    process3Desc:
      "Lập trình cuốn chiếu theo phân đoạn ngắn (Sprints). Liên tục kiểm thử tự động để loại bỏ lỗi sớm.",
    process4Title: "4. Bàn giao & Vận hành",
    process4Desc:
      "Triển khai lên server thực tế dưới sự giám sát chặt chẽ của kỹ sư DevOps, đào tạo vận hành hệ thống.",

    trustTitle: "Tại Sao Các Đối Tác Tin Tưởng Korix?",
    trustSubtitle:
      "Chúng tôi thiết lập những tiêu chuẩn cao vượt lên trên cả mong đợi cốt lõi",
    trust1Title: "Chất Lượng Code Hoàn Hảo",
    trust1Desc:
      "Áp dụng Clean Architecture và TypeScript nghiêm ngặt, giúp hệ thống dễ dàng bảo trì về sau.",
    trust2Title: "Bàn Giao Đúng Hạn",
    trust2Desc:
      "Quản trị công việc qua hệ thống Agile minh bạch. Cam kết không phát sinh chi phí ngoài lộ trình.",
    trust3Title: "Hỗ Trợ Đồng Hành 24/7",
    trust3Desc:
      "Hệ thống kênh chat nhanh kết nối trực tiếp với đội kỹ sư hỗ trợ tức thì khi có sự cố phát sinh.",

    // Interactive Elements
    calculatorTitle: "Công Cụ Dự Toán & Đề Xuất Kiến Trúc",
    calculatorDesc:
      "Chọn các thông số kỹ thuật để tự động phân tích chi phí phần cứng tham chiếu, thời gian hoàn thành ước tính và bộ công cụ kiến nghị.",
    selectCategory: "Chọn Module Giải Pháp",
    estimatedUsers: "Lượng Người Dùng Hoạt Động / Tháng",
    databaseScale: "Số Phân Mảnh Database (Shards)",
    projectSpeed: "Tốc Độ Bàn Giao Yêu Cầu",
    speedStandard: "Tiêu chuẩn (8-12 tuần)",
    speedExpedited: "Đẩy nhanh (4-6 tuần)",
    speedHyper: "Siêu tốc (3 tuần - Ra mắt gấp)",
    optimalStack: "Hệ Công Nghệ Khuyên Dùng",
    estimatedTime: "Thời Gian Phát Triển (Sprints)",
    estimatedBudget: "Ngân Sách Tham Chiếu Dự Kiến",
    getBlueprintBtn: "Xuất Bản Thiết Kế Blueprint",

    // Consultation Form
    formStep1: "Dạng Dự Án",
    formStep2: "Thông Tin Doanh Nghiệp",
    formStep3: "Chọn Lịch Hẹn",
    formName: "Họ và Tên",
    formEmail: "Email Doanh Nghiệp",
    formCompany: "Tên Doanh Nghiệp",
    formRequirements: "Yêu Cầu Kỹ Thuật Chính",
    formDate: "Ngày Tư Vấn Mong Muốn (Zoom/Meet)",
    formDatePlaceholder: "Chọn ngày khảo sát",
    formMessage: "Chia sẻ bối cảnh / Khó khăn hiện tại",
    formSubmit: "Xác Nhận Đặt Lịch Tư Vấn",
    formSuccess:
      "Đã đăng ký thành công lịch tư vấn! Chuyên gia giải pháp của Korix sẽ liên hệ gửi kèm email xác nhận agenda trong vòng 2 giờ làm việc.",
    btnNext: "Tiếp tục",
    btnPrev: "Quay lại",
  },
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "K Pham",
    role: "Chief Executive Officer & CTO",
    bio: "Ex-Head of Engineering at a premier US tech giant. Years leading cross-functional distributed infrastructure and high-throughput real-time APIs.",
    imageUrl: IMAGES.ctoKhiem,
  },
  {
    name: "T Phung",
    role: "Head of Quality & Design",
    bio: "Senior UX designer advocate with a strict philosophy of minimalist usability, robust component design systems, and stunning motion transitions.",
    imageUrl: IMAGES.qualityT,
  },
  {
    name: "N Nguyen",
    role: "Head of Engineering & Cloud",
    bio: "AWS Certified Solutions Architect Professional. Experienced in spinning up elastic Kubernetes architectures and zero-failure serverless engines.",
    imageUrl: IMAGES.cloudN,
  },
  {
    name: "L Tran",
    role: "Head of Sales & Client Success",
    bio: "Ph.D. in Computer Science focusing on Natural Language Processing & computer vision. Architect behind Korix’s adaptive warehouse model.",
    imageUrl: IMAGES.salesL,
  },
];

export const MILESTONES: Milestone[] = [
  {
    year: "2021",
    title: "The Genesis",
    titleVi: "Khởi Đầu Tinh Gọn",
    description:
      "Korix represents formed with 5 core engineers and 2 cloud performance fine-tuning projects.",
    descriptionVi:
      "Thành lập Korix với đội ngũ 5 kỹ sư cốt lõi, hoàn thành 2 dự án tối ưu hạ tầng Cloud lớn.",
  },
  {
    year: "2022",
    title: "Ecosystem Breakthrough",
    titleVi: "Bứt Phá Giải Pháp",
    description:
      "Shipped the signature visual robotic warehouse tracking automation and scaled the R&D Lab.",
    descriptionVi:
      "Ra mắt giải pháp tự động hóa AI thị giác cho kho vận và chính thức mở rộng phòng Lab nghiên cứu.",
  },
  {
    year: "2023",
    title: "Mass Scale Reached",
    titleVi: "Vươn Tầm Quy Mô",
    description:
      "Partnered with 3 tier-1 banks to power digital core infrastructure, serving over 10 million consumers daily.",
    descriptionVi:
      "Hợp tác chiến lược đầu tiên với 3 ngân hàng lớn, hỗ trợ vận hành lõi giao dịch phục vụ hơn 10 triệu người dùng.",
  },
  {
    year: "2024",
    title: "Enterprise Authority",
    titleVi: "Khẳng Định Vị Thế",
    description:
      "Acclaimed as the primary developer for multination digital transformation with regional network expansions.",
    descriptionVi:
      "Trở thành đối tác chuyển đổi số toàn diện cho các tập đoàn đa quốc gia và chính thức mở văn phòng khu vực.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    client: "TechBank",
    title:
      "Optimized distributed core-banking, slashing transactions processing latencies.",
    titleVi:
      "Tối ưu hóa core-banking phân tán, giảm thiểu độ trễ xử lý các giao dịch.",
    metric: "40% latency reduction",
    metricVi: "Giảm 40% độ trễ",
    tag: "Fintech",
    tagVi: "Tài chính Số",
  },
  {
    client: "Warehouse AI / LogiWare",
    title:
      "Automated real-time warehouse fulfillment utilizing computer vision robotics.",
    titleVi:
      "Tự động hóa hoàn tất đơn hàng kho chứa bằng thị giác máy học và robot.",
    metric: "120% picking efficiency gain",
    metricVi: "+120% hiệu suất soạn hàng",
    tag: "Logistics",
    tagVi: "Kho Vận Thông Minh",
  },
  {
    client: "MediHealth Sync",
    title:
      "Designed secure system connecting electronic medical history file channels.",
    titleVi:
      "Kiến tạo cổng kết nối hồ sơ bệnh án số hóa liên thông bảo mật cao.",
    metric: "5M+ patients securely registered",
    metricVi: "5 triệu+ hồ sơ bảo mật trọn vẹn",
    tag: "Healthcare",
    tagVi: "Y tế Số",
  },
];

export const SOLUTIONS_LIST = [
  {
    id: "ai_bot",
    name: "AI & Industrial Automation",
    nameVi: "Hạ Tầng AI & Tự Động Hóa",
    basePrice: 15000,
    multiplier: 1.25,
    recommendedStack: [
      "Python",
      "TensorFlow",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    image: IMAGES.warehouseRobotics,
  },
  {
    id: "cloud_nest",
    name: "Cloud Architectures & Microservices",
    nameVi: "Kiến Trúc Đám Mây & Microservices",
    basePrice: 8000,
    multiplier: 1.15,
    recommendedStack: [
      "AWS / GCP",
      "Kubernetes",
      "TypeScript",
      "Node.js",
      "Redis",
    ],
    image: IMAGES.lightSkyscraper,
  },
  {
    id: "data_brain",
    name: "Real-time Executive Analytics",
    nameVi: "Quản Trị & Phân Tích Dữ Liệu Thời Gian Thực",
    basePrice: 12000,
    multiplier: 1.2,
    recommendedStack: [
      "React",
      "D3.js / Recharts",
      "PostgreSQL",
      "Apache Kafka",
      "Go",
    ],
    image: IMAGES.laptopCode,
  },
  {
    id: "health_portal",
    name: "Digital Healthcare & Secure Platforms",
    nameVi: "Y Tế & Lưu Trữ Số Hóa Bảo Mật",
    basePrice: 20000,
    multiplier: 1.35,
    recommendedStack: [
      "Next.js",
      "PostgreSQL",
      "GraphQL",
      "AWS KMS",
      "HIPAA Vault",
    ],
    image: IMAGES.healthLab,
  },
];
