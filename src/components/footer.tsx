import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 text-2xl font-bold">
              <div className="flex items-center space-x-2">
                <span>天际法务</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-sm opacity-80">知未来</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">快速链接</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/settlement" className="text-sm opacity-80 hover:opacity-100">合作方案</Link>
              <Link href="/recruitment" className="text-sm opacity-80 hover:opacity-100">招聘信息</Link>
              <Link href="/about" className="text-sm opacity-80 hover:opacity-100">关于我们</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">产品服务</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/aigc" className="text-sm opacity-80 hover:opacity-100">AI智能创作</Link>
              <Link href="/search" className="text-sm opacity-80 hover:opacity-100">法律检索</Link>
              <Link href="/paralegal" className="text-sm opacity-80 hover:opacity-100">律师助手</Link>
              <Link href="/news" className="text-sm opacity-80 hover:opacity-100">行业资讯</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">联系我们</h3>
            <div className="flex flex-col space-y-2">
              <p className="text-sm opacity-80">0755-26907610</p>
              <p className="text-sm opacity-80">admin@tianjilegal.com</p>
              <p className="text-sm opacity-80">统一社会信用代码<br />2201210211</p>
            </div>
            <div className="mt-4 flex space-x-4">
              <div className="flex flex-col items-center">
                <div className="h-24 w-24 bg-white p-1">
                  {/* 这里放二维码图片 */}
                </div>
                <span className="mt-1 text-xs opacity-80">微信公众号</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-24 w-24 bg-white p-1">
                  {/* 这里放二维码图片 */}
                </div>
                <span className="mt-1 text-xs opacity-80">客服二维码</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm opacity-70">
          <p>Copyright © 2024 天际法务 All Rights Reserved</p>
          <div className="mt-2 flex items-center justify-center space-x-4">
            <Link href="http://www.beian.gov.cn/portal/registerSystemInfo" className="hover:opacity-100">
              粤公网安备 44030502009348
            </Link>
            <Link href="https://beian.miit.gov.cn/" className="hover:opacity-100">
              粤ICP18045616-2
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
