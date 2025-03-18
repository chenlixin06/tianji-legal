import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-blue-700 text-white">
        <div className="container flex flex-col items-center justify-center py-20 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">天际法务</h1>
          <p className="mb-8 text-2xl font-medium md:text-3xl">"AI+律师" 智能法律平台</p>
          <p className="mb-10 max-w-2xl text-lg md:text-xl">专业智能法律解决方案提供商</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="default" className="bg-white text-primary hover:bg-gray-100">
              <Link href="#services">了解更多</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-primary/20">
              <Link href="#contact">联系我们</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="services" className="bg-slate-50 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">AI+法律服务</h2>
            <div className="mx-auto mb-8 h-1 w-20 bg-primary"></div>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">探索智能法律科技，高效解决您的法律需求</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "法律AI助手",
                description: "7*24小时在线智能问答，高效解决法律咨询需求",
                icon: "🤖",
                link: "/ai"
              },
              {
                title: "智能法律检索",
                description: "采用NLP技术，快速精准定位相关法律文件和案例",
                icon: "🔍",
                link: "/search"
              },
              {
                title: "AI文书起草",
                description: "智能分析案件情况，辅助起草法律文书",
                icon: "📝",
                link: "/draft"
              },
              {
                title: "律师工作台",
                description: "一站式律师数字化工作平台，提升工作效率",
                icon: "💼",
                link: "/workspace"
              }
            ].map((service, index) => (
              <Card key={index} className="group overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-3 text-4xl">{service.icon}</div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-white">
                    <Link href={service.link}>了解更多</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Advantage Section */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">AI技术优势</h2>
            <div className="mx-auto mb-8 h-1 w-20 bg-primary"></div>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">先进的AI技术为法律服务带来革命性变化</p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="mb-6 text-2xl font-bold">智能法律大模型</h3>
              <ul className="space-y-4">
                {[
                  "基于海量法律语料训练，深度理解法律专业知识",
                  "智能分析案件事实，推荐相关法条和判例",
                  "24小时在线，即时解答法律问题",
                  "持续学习进化，法律知识定期更新"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 w-fit">
                <Link href="/ai">体验AI助手</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-slate-100 p-8">
              <div className="aspect-video w-full max-w-md rounded-lg bg-white p-4 shadow-lg">
                <div className="flex h-full flex-col justify-center rounded border border-gray-200 p-4">
                  <div className="mx-auto h-20 w-20 rounded-full bg-primary/10 p-4">
                    <div className="h-full w-full rounded-full bg-primary"></div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 w-full rounded bg-gray-200"></div>
                    <div className="h-2 w-3/4 rounded bg-gray-200"></div>
                    <div className="h-2 w-5/6 rounded bg-gray-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Groups Section */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">专业服务对象</h2>
            <div className="mx-auto mb-8 h-1 w-20 bg-primary"></div>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">为法律行业各方提供专业解决方案</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="overflow-hidden border-none bg-white shadow-lg">
              <CardHeader className="bg-primary pb-4 pt-8 text-center text-white">
                <h3 className="text-2xl font-bold">法律专业人士</h3>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "一站式律师工作管理平台",
                    "AI辅助法律研究与文书起草",
                    "智能案件管理系统",
                    "法律知识库检索与分析",
                    "提升50%工作效率"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="justify-center p-6 pt-0">
                <Button asChild>
                  <Link href="/cases?category=law-firm">了解更多</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden border-none bg-white shadow-lg">
              <CardHeader className="bg-blue-600 pb-4 pt-8 text-center text-white">
                <h3 className="text-2xl font-bold">企业与个人用户</h3>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "智能法律咨询与解答",
                    "常见法律问题一键获取解决方案",
                    "合同文件智能审核与风险提示",
                    "法律文书智能生成",
                    "降低60%法律服务成本"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="justify-center p-6 pt-0">
                <Button asChild>
                  <Link href="/cases?category=corporate">了解更多</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* API Section */}
      <section id="api" className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">API服务</h2>
            <div className="mx-auto mb-8 h-1 w-20 bg-primary"></div>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">为开发者和企业提供强大的法律AI能力</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold">AI接口能力</h3>
              <p className="text-gray-600">接入天际法务AI API，快速为您的应用赋能法律智能</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">💰</span>
                  <span>灵活的计费方式，按需付费</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">🚀</span>
                  <span>简单易用的API接口，快速部署</span>
                </div>
              </div>
              <Button asChild>
                <Link href="https://open.tianjilegal.com/">查看API文档</Link>
              </Button>
            </div>
            <div className="w-full max-w-md flex-1 rounded-lg bg-slate-50 p-8">
              <div className="rounded-lg bg-slate-800 p-4 font-mono text-sm text-green-400">
                <p className="mb-2 text-gray-400">{/* 天际法务AI API示例 */}</p>
                <p>const response = await fetch(</p>
                <p className="ml-4">'https://api.tianjilegal.com/v1/legal-qa',</p>
                <p className="ml-4">{'{'}</p>
                <p className="ml-8">method: 'POST',</p>
                <p className="ml-8">headers: {'{'}</p>
                <p className="ml-12">'Content-Type': 'application/json',</p>
                <p className="ml-12">'Authorization': 'Bearer YOUR_API_KEY'</p>
                <p className="ml-8">{'}'},</p>
                <p className="ml-8">body: JSON.stringify({'{'}</p>
                <p className="ml-12">question: "劳动合同到期未续签怎么办?"</p>
                <p className="ml-8">{'}'})</p>
                <p className="ml-4">{'}'}</p>
                <p>);</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-gradient-to-r from-primary to-blue-700 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-4xl font-bold">开启法律智能时代</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg md:text-xl">立即注册，体验天际法务带来的智能法律服务</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              asChild
              size="lg"
              className="bg-white px-8 py-6 text-lg font-semibold text-primary shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
            >
              <Link href="/contact">
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                  联系我们
                </span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all hover:bg-white/10 hover:shadow-xl"
            >
              <Link href="/cases">
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7h18" />
                    <path d="M8 5v2" />
                    <path d="M16 5v2" />
                    <path d="M8 14h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 10h.01" />
                    <path d="M12 10h.01" />
                    <path d="M16 10h.01" />
                  </svg>
                  查看案例
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
