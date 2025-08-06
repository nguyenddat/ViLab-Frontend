import Image from "next/image";

import heroImage from "@/assets/99fc68e4107aab1774714b49255ced4f.jpg";
import { MoveRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Hero() {
  return (
    <div className="w-full py-20 lg:py-20">
      <div className="container mx-auto">
        <div className="rounded-3xl bg-background/80 backdrop-blur-md border border-border/50 shadow-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
            <div className="flex gap-4 flex-col">
              <div className="flex gap-4 flex-col">
                <Badge variant="outline" className="w-fit">Thực hành là quyền lợi!</Badge>
                <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                  ViLab - Virtual Lab for STEM
                </h1>
                <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                  Nền tảng LCMS hiện đại giúp quản lý và phân phối tài nguyên số cho các hoạt động thực hành STEM – tất cả đều dễ truy cập, dễ sử dụng, và dành cho mọi học sinh, giáo viên.
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <Button size="lg" className="gap-4" variant="outline">
                  Khám phá ngay <Search className="w-4 h-4" />
                </Button>
                <Button size="lg" className="gap-4">
                  Đăng nhập ngay <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="relative bg-muted/50 rounded-2xl aspect-square backdrop-blur-sm overflow-hidden">
              <Image
                src={heroImage}
                alt="ViLab - Virtual Lab for STEM"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };