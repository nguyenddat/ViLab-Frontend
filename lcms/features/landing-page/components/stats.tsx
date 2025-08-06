import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Stats() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Thống kê</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                ViLab - Nền tảng thí nghiệm ảo hàng đầu
              </h2>
              <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                Khám phá những con số ấn tượng về nền tảng thí nghiệm ảo của chúng tôi. 
                Từ số lượng thí nghiệm phong phú đến cộng đồng người dùng đông đảo, 
                ViLab đang tạo ra cuộc cách mạng trong giáo dục STEM.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2">
              <div className="flex gap-0 flex-col justify-between p-6 border border-border/50 bg-background/60 backdrop-blur-sm rounded-md">
                <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                  100
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Thí nghiệm hiện tại
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border border-border/50 bg-background/60 backdrop-blur-sm rounded-md">
                <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                  15.000
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Người dùng hiện tại
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border border-border/50 bg-background/60 backdrop-blur-sm rounded-md">
                <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                  50
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Đối tác nhà trường
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border border-border/50 bg-background/60 backdrop-blur-sm rounded-md">
                <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                  98%
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Tỉ lệ phản hồi tích cực
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Stats };
