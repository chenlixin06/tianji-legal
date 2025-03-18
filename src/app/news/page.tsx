import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "新闻资讯 - 天际法务",
  description: "天际法务最新法律科技新闻、行业动态和法律AI发展",
}

interface NewsItem {
  id: string
  title: string
  category: "industry" | "company" | "laws" | "literacy"
  date: string
  image: string
  excerpt: string
  author: string
  tags: string[]
}

// 模拟新闻数据
const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Manus AI：通用大模型如何赋能法律场景应用？",
    category: "industry",
    date: "2025-03-09",
    image: "https://placehold.co/600x400/3552b2/white?text=AI+Legal",
    excerpt: "Manus AI推出法律大模型，专为法律场景设计，能够处理复杂法律文件并提供准确的法律咨询。",
    author: "天际法务研究团队",
    tags: ["AI", "法律大模型", "Manus"]
  },
  {
    id: "2",
    title: "女性在法律行业的发展现状：60%律所存在性别差距",
    category: "industry",
    date: "2025-03-07",
    image: "https://placehold.co/600x400/d67e7e/white?text=Legal+Stats",
    excerpt: "最新调查显示，60%的律师事务所高级合伙人中女性比例低于20%，法律行业仍面临性别不平等挑战。",
    author: "法律行业观察员",
    tags: ["法律行业", "性别平等", "职业发展"]
  },
  {
    id: "3",
    title: "人工智能Agent应用：Manus如何革新法律服务",
    category: "industry",
    date: "2025-03-06",
    image: "https://placehold.co/600x400/3552b2/white?text=AI+Agent",
    excerpt: "Manus通过Butterfly Effect技术，将AI与法律专业知识结合，创新性地改变了法律服务的提供方式。",
    author: "科技与法律融合研究所",
    tags: ["AI Agent", "法律科技", "服务创新"]
  },
  {
    id: "4",
    title: "天际法务推出全新法律AI平台，实现法律咨询全流程智能化",
    category: "company",
    date: "2025-03-05",
    image: "https://placehold.co/600x400/4f6bed/white?text=天际法务",
    excerpt: "天际法务今日发布全新法律AI平台，整合智能文档分析、案件预测和自动化法律咨询服务。",
    author: "公司新闻部",
    tags: ["产品发布", "法律AI", "智能咨询"]
  },
  {
    id: "5",
    title: "2025全国两会：AI+法律成为热门话题",
    category: "laws",
    date: "2025-03-05",
    image: "https://placehold.co/600x400/cc0000/white?text=政策动态",
    excerpt: "2025年全国两会期间，多位代表委员建议加强AI法律应用的规范和促进，推动法律服务数字化转型。",
    author: "政策观察",
    tags: ["政策法规", "两会", "法律数字化"]
  },
  {
    id: "6",
    title: "法律AI应用实践指南：从咨询到诉讼全攻略",
    category: "literacy",
    date: "2025-03-04",
    image: "https://placehold.co/600x400/217ab7/white?text=实践指南",
    excerpt: "本文详细介绍法律AI在咨询、文档处理、诉讼准备等环节的应用方法，提供PPT和实用AI工具推荐。",
    author: "法律科技教育中心",
    tags: ["实用指南", "AI应用", "法律实务"]
  }
]

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary to-blue-700 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-white">行业资讯</h1>
            <p className="text-xl text-white/80">
              了解法律科技最新动态，掌握行业发展趋势
            </p>
          </div>
        </div>
      </div>

      {/* News Categories */}
      <div className="border-b">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2 md:gap-6">
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/news">全部</Link>
            </Button>
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/news?category=company">公司动态</Link>
            </Button>
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/news?category=industry">行业洞察</Link>
            </Button>
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/news?category=laws">法律法规</Link>
            </Button>
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/news?category=literacy">科技普法</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <div key={item.id} className="card-hover group overflow-hidden rounded-lg border bg-background shadow">
              <div className="aspect-[16/9] overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                    {item.category === "industry" && "行业洞察"}
                    {item.category === "company" && "公司动态"}
                    {item.category === "laws" && "法律法规"}
                    {item.category === "literacy" && "科技普法"}
                  </span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  <Link href={`/news/${item.id}`} className="hover:text-primary">
                    {item.title}
                  </Link>
                </h3>

                <p className="mb-4 text-gray-600">
                  {item.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.author}</span>
                  <Link
                    href={`/news/${item.id}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    阅读更多 →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <Button variant="outline" size="sm" disabled>
            上一页
          </Button>
          <Button variant="outline" size="sm" className="bg-primary text-white hover:bg-primary/90">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <span>...</span>
          <Button variant="outline" size="sm">
            10
          </Button>
          <Button variant="outline" size="sm">
            下一页
          </Button>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-slate-50 py-12">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-4 text-center text-2xl font-bold">订阅法律科技资讯</h2>
            <p className="mb-6 text-center text-gray-600">
              及时获取最新法律科技动态，不错过任何重要资讯
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="您的电子邮箱"
                className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button className="whitespace-nowrap">
                立即订阅
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
