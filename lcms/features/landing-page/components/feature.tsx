"use client";

import * as React from "react";
import { Layout, Pointer, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import featureImage1 from "@/assets/90e82d8d5d839ea5f24db7c9154dd1c7.jpg";
import featureImage2 from "@/assets/8579040d88f19d80de9b1ca0203ab079.jpg";
import featureImage3 from "@/assets/9409a5a8afb2052f5b6c55021ab3cb89.jpg";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: any;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  heading = "Các tính năng chính",
  description = "Quản lý và phân phối tài nguyên số cho các hoạt động thực hành STEM",
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Mô phỏng thí nghiệm STEM",
      content: {
        badge: "Phòng thí nghiệm ảo",
        title: "Mô phỏng thí nghiệm STEM",
        description:
          "Các dụng cụ thí nghiệm được mô hình hóa, hỗ trợ thực hành thí nghiệm khi không được đảm bảo đầy đủ về cơ sở vật chất.",
        buttonText: "Dùng thử ngay",
        imageSrc: featureImage1,
        imageAlt: "Mô phỏng thí nghiệm STEM",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Bám sát chương trình SGK",
      content: {
        badge: "Nội dung thí nghiệm theo chuẩn",
        title: "Thiết kế theo chuẩn đầu ra của chương trình SGK",
        description:
          "Các thí nghiệm được thiết kế bám sát chương trình giáo dục phổ thông giúp học sinh tiếp cận đúng nội dung và đạt được chuẩn đầu ra của chương trình.",
        buttonText: "Xem các bài thí nghiệm",
        imageSrc: featureImage2,
        imageAlt: "Xem các bài thí nghiệm",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "AI hỗ trợ giảng dạy/ học tập",
      content: {
        badge: "Hỗ trợ trực tiếp cá nhân theo bài học",
        title: "AI trợ lý giảng dạy/ gia sư học tập",
        description:
          "AI đóng vai trò như trợ lý giảng dạy của giáo viên, đóng vai trò như gia sư giúp học sinh tự học, tự kiểm tra bản thân và tự đánh giá kết quả học tập.",
        buttonText: "Khám phá qua thí nghiệm",
        imageSrc: featureImage3,
        imageAlt: "AI hỗ trợ giảng dạy/ học tập",
      },
    },
  ],
}: Feature108Props) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0].value);

  const handleTabChange = (value: string) => {
    console.log('Tab changed to:', value);
    setActiveTab(value);
  };

  return (
    <section className="relative z-10">
      <div className="container mx-auto relative">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            {heading}
          </h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} value={activeTab} onValueChange={handleTabChange} className="mt-8 w-full">
          <TabsList className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 bg-transparent p-0 w-full">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary hover:bg-muted/50 transition-colors cursor-pointer border border-transparent hover:border-border"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-background/80 backdrop-blur-md border border-border/50 p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-background">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg">
                    {tab.content.description}
                  </p>
                  <Button
                    className="mt-2.5 w-fit gap-2 hover:scale-105 transition-transform"
                    size="lg"
                    onClick={() => {
                      console.log(`Clicked: ${tab.content.buttonText}`);
                      // Add your navigation or action logic here
                    }}
                  >
                    {tab.content.buttonText}
                  </Button>
                </div>
                <div className="w-full h-[400px] flex items-center justify-center">
                  <img
                    src={typeof tab.content.imageSrc === 'string' ? tab.content.imageSrc : tab.content.imageSrc.src}
                    alt={tab.content.imageAlt}
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
