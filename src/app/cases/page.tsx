import Link from "next/link"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "成功案例 - 天际法务",
  description: "天际法务AI法律解决方案的成功案例展示，包括律所数字化转型、企业法务管理系统等",
}

interface CaseStudy {
  id: string
  title: string
  category: "law-firm" | "corporate" | "government" | "individual"
  date: string
  image: string
  client: string
  challenge: string
  solution: string
  results: string[]
}

// 模拟案例数据
const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "某大型律师事务所数字化转型",
    category: "law-firm",
    date: "2025-02",
    image: "https://placehold.co/600x400/3552b2/white?text=数字化转型",
    client: "国内某知名律师事务所（200+律师团队）",
    challenge: "律所面临文档管理混乱、案件跟踪效率低下、知识库缺乏智能检索等问题，严重影响工作效率和客户满意度。",
    solution: "为律所部署天际法务DLS律师数字化平台，整合AI文档处理、智能检索和案件管理系统，并提供定制化培训。",
    results: [
      "文档处理时间减少65%",
      "法律研究效率提升80%",
      "客户满意度提升40%",
      "律师人均收入增长35%"
    ]
  },
  {
    id: "2",
    title: "大型企业法务合规管理系统",
    category: "corporate",
    date: "2025-01",
    image: "https://placehold.co/600x400/217ab7/white?text=合规管理",
    client: "某大型互联网集团企业法务部",
    challenge: "跨国业务扩张导致法务合规风险增加，传统人工审核无法应对高并发的合规需求，面临潜在法律风险。",
    solution: "部署天际法务AI合规审核系统，建立智能法律风险识别模型，整合多国法规库，实现自动化合同审核和风险提示。",
    results: [
      "合同审核时间从平均3天缩短至2小时",
      "识别潜在法律风险准确率达94%",
      "法务团队处理效率提升300%",
      "避免潜在法律纠纷，估值节省成本约2000万元"
    ]
  },
  {
    id: "3",
    title: "政府部门法规解读智能化",
    category: "government",
    date: "2024-12",
    image: "https://placehold.co/600x400/cc0000/white?text=法规解读",
    client: "某省级政府法制办公室",
    challenge: "公民和企业对法规理解困难，咨询量大，人工解答资源有限，影响政府服务效率和公众满意度。",
    solution: "定制政府法规智能问答系统，针对当地法规进行深度训练，支持多轮对话和场景式咨询，并整合办事指南。",
    results: [
      "24小时在线解答，覆盖95%常见法律问题",
      "公众满意度提升至92%",
      "行政效率提升70%",
      "每年节约人力成本约500万元"
    ]
  },
  {
    id: "4",
    title: "个人法律助手平台",
    category: "individual",
    date: "2024-11",
    image: "https://placehold.co/600x400/d67e7e/white?text=个人助手",
    client: "面向C端用户的法律服务平台",
    challenge: "普通公众获取专业法律服务的门槛高、成本高，基础法律问题难以及时获得解答，权益保障不足。",
    solution: "开发针对个人用户的法律AI助手App，提供免费基础法律咨询，智能生成常用法律文书，推荐专业律师服务。",
    results: [
      "累计服务用户超过100万",
      "基础法律问题解决率达85%",
      "用户法律文书生成成本降低90%",
      "促成专业律师服务对接3万余次"
    ]
  },
  {
    id: "5",
    title: "跨境电商法律风险防控系统",
    category: "corporate",
    date: "2024-10",
    image: "https://placehold.co/600x400/4f6bed/white?text=跨境电商",
    client: "某跨境电商平台",
    challenge: "业务覆盖多个国家和地区，各地法规差异大，难以统一管理合规风险，导致频繁面临法律纠纷和处罚。",
    solution: "构建多国法规知识库和比对系统，开发智能合规审核工具，针对不同国家市场提供差异化合规指南。",
    results: [
      "法规遵从度提升95%",
      "法律纠纷减少78%",
      "年度合规成本降低55%",
      "成功开拓8个新兴市场"
    ]
  },
  {
    id: "6",
    title: "知识产权保护AI监控系统",
    category: "corporate",
    date: "2024-09",
    image: "https://placehold.co/600x400/218838/white?text=知识产权",
    client: "某科技创新企业集团",
    challenge: "拥有大量专利和知识产权资产，但缺乏有效的侵权监控手段，人工检索耗时且难以全面覆盖市场。",
    solution: "开发AI知识产权监控系统，通过网络爬虫和深度学习算法，自动检测潜在侵权行为，生成预警报告。",
    results: [
      "监测覆盖率提升300%",
      "侵权事件提前预警率达75%",
      "知识产权保护成本降低40%",
      "成功处理侵权案件增长60%"
    ]
  }
]

export default function CasesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary to-blue-700 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-white">成功案例</h1>
            <p className="text-xl text-white/80">
              探索天际法务如何通过AI法律科技解决实际问题
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="border-b">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2 md:gap-6">
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/cases">全部案例</Link>
            </Button>
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/cases?category=law-firm">律师事务所</Link>
            </Button>
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/cases?category=corporate">企业法务</Link>
            </Button>
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/cases?category=government">政府部门</Link>
            </Button>
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/cases?category=individual">个人服务</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <Card key={caseStudy.id} className="card-hover overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                    {caseStudy.category === "law-firm" && "律师事务所"}
                    {caseStudy.category === "corporate" && "企业法务"}
                    {caseStudy.category === "government" && "政府部门"}
                    {caseStudy.category === "individual" && "个人服务"}
                  </span>
                  <span className="text-sm text-gray-500">{caseStudy.date}</span>
                </div>

                <h3 className="mb-3 text-xl font-bold">{caseStudy.title}</h3>

                <p className="mb-4 text-gray-600 line-clamp-3">
                  {caseStudy.challenge}
                </p>

                <Button asChild className="w-full">
                  <Link href={`/cases/${caseStudy.id}`}>查看详情</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Case Study Details Modal */}
      {/* 实际项目中，这里可以使用dialog或modal组件展示详情，或跳转到单独页面 */}

      {/* CTA Section */}
      <div className="bg-slate-50 py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">您的企业或组织也需要智能法律解决方案？</h2>
            <p className="mb-8 text-lg text-gray-600">
              无论您是律师事务所、企业法务部门还是政府机构，天际法务都能为您提供定制化的法律AI解决方案。
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">预约咨询</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">探索解决方案</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
