import Link from "next/link"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "联系我们 - 天际法务",
  description: "联系天际法务团队，获取专业的法律科技解决方案咨询",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary to-blue-700 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-white">联系我们</h1>
            <p className="text-xl text-white/80">
              我们期待为您提供专业的法律科技解决方案
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">联系方式</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">电话</h3>
                  <p className="mt-1">0755-26907610</p>
                  <p className="text-sm text-muted-foreground">周一至周五 9:00-18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">邮箱</h3>
                  <p className="mt-1">admin@tianjilegal.com</p>
                  <p className="text-sm text-muted-foreground">我们会在24小时内回复您</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">地址</h3>
                  <p className="mt-1">深圳市南山区科技园南区高新南七道</p>
                  <p className="text-sm text-muted-foreground">邮编: 518057</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 font-semibold">关注我们</h3>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-24 w-24 rounded border bg-white p-1 shadow-sm">
                    {/* 微信公众号二维码 */}
                    <div className="flex h-full w-full items-center justify-center bg-slate-100 text-xs text-gray-500">
                      微信公众号
                    </div>
                  </div>
                  <span className="mt-1 text-xs text-gray-500">微信公众号</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="h-24 w-24 rounded border bg-white p-1 shadow-sm">
                    {/* 客服二维码 */}
                    <div className="flex h-full w-full items-center justify-center bg-slate-100 text-xs text-gray-500">
                      客服二维码
                    </div>
                  </div>
                  <span className="mt-1 text-xs text-gray-500">客服二维码</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="overflow-hidden">
              <div className="bg-primary p-6 text-white">
                <h2 className="text-2xl font-bold">发送咨询</h2>
                <p className="mt-1 text-white/80">我们会尽快回复您的留言</p>
              </div>

              <div className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium" htmlFor="name">
                        姓名
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="您的姓名"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium" htmlFor="phone">
                        电话
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="您的联系电话"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium" htmlFor="email">
                      邮箱
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="您的电子邮箱"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium" htmlFor="subject">
                      主题
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="咨询主题"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium" htmlFor="message">
                      留言内容
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="请详细描述您的需求或问题"
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="privacy"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                      我已阅读并同意
                      <Link href="/privacy" className="text-primary hover:underline">
                        《隐私政策》
                      </Link>
                    </label>
                  </div>

                  <Button type="submit" className="w-full">
                    提交
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-slate-50 py-12">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 text-center text-2xl font-bold">公司位置</h2>
            <div className="aspect-[16/9] overflow-hidden rounded-lg border bg-white shadow-md">
              {/* 嵌入地图 */}
              <div className="flex h-full w-full items-center justify-center bg-slate-200 p-4 text-center text-gray-500">
                <p>
                  此处通常会嵌入地图。<br />
                  由于安全原因，本演示不加载实际地图。<br />
                  实际应用中可以集成高德地图、百度地图等第三方地图服务。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
