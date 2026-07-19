import type { Assignment, Skill } from './types';

export const assignments: Assignment[] = [
  {
    id: 1, code: 'OPS.01', category: 'Vận hành số', shortTitle: 'Tệp tin & thư mục',
    title: 'Thao tác cơ bản với tệp tin và thư mục',
    description: 'Thực hành tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục dữ liệu trên File Explorer theo một quy trình rõ ràng.',
    objective: 'Xây dựng thói quen tổ chức dữ liệu khoa học — nền tảng của vận hành cá nhân và quản trị tài liệu trong doanh nghiệp.',
    process: ['Thiết lập cấu trúc thư mục thực hành.', 'Tạo và chuẩn hóa quy tắc đặt tên tệp.', 'Thực hành vòng đời dữ liệu từ tạo mới đến khôi phục.'],
    lesson: 'Một hệ thống lưu trữ tốt giúp giảm thời gian tìm kiếm, hạn chế sai sót và tăng tính liên tục khi bàn giao công việc.',
    skills: ['Quản lý dữ liệu', 'Tổ chức công việc', 'Kỷ luật số'], tools: ['File Explorer', 'Windows'],
    pageCount: 6, fileUrl: '/files/bai-1.pdf', color: '#c9e8ff'
  },
  {
    id: 2, code: 'MKT.02', category: 'Nghiên cứu thị trường', shortTitle: 'Thông tin học thuật',
    title: 'Tìm kiếm và đánh giá thông tin học thuật',
    description: 'Nghiên cứu ảnh hưởng của mạng xã hội đến hành vi tiêu dùng của giới trẻ trong bối cảnh kinh tế số.',
    objective: 'Biết xác định phạm vi nghiên cứu, xây dựng từ khóa và đánh giá độ tin cậy của nguồn trước khi đưa ra nhận định kinh doanh.',
    process: ['Khoanh vùng nhóm người tiêu dùng 18–25 tuổi.', 'Tìm kiếm bằng Google Scholar và nguồn chuyên ngành.', 'Đối chiếu tác giả, phương pháp, năm công bố và mức độ liên quan.'],
    lesson: 'Quyết định tốt cần dữ liệu tốt. Nguồn đầu tiên chưa chắc là nguồn phù hợp nhất; mọi kết luận cần được kiểm chứng đa chiều.',
    skills: ['Market research', 'Đánh giá nguồn', 'Tư duy phản biện'], tools: ['Google Scholar', 'Harvard referencing'],
    pageCount: 6, fileUrl: '/files/bai-2.pdf', color: '#dce8d3'
  },
  {
    id: 3, code: 'AI.03', category: 'Năng suất AI', shortTitle: 'Prompt hiệu quả',
    title: 'Thực hành viết Prompt hiệu quả',
    description: 'Thử nghiệm prompt cơ bản và prompt cải tiến cho ba tác vụ: tóm tắt, giải thích khái niệm và tạo câu hỏi ôn tập.',
    objective: 'Hiểu cách vai trò, bối cảnh, tiêu chí chất lượng và định dạng đầu ra tác động trực tiếp đến hiệu quả làm việc với AI.',
    process: ['Xây dựng prompt nền cho từng tác vụ.', 'Bổ sung ràng buộc và cấu trúc đầu ra.', 'So sánh kết quả, nhận diện điểm mạnh và giới hạn.'],
    lesson: 'Prompt là một bản brief quản trị: mục tiêu càng rõ, tiêu chí càng đo được thì đầu ra càng có giá trị và ít phải làm lại.',
    skills: ['Prompt engineering', 'Phân tích đầu ra', 'Tối ưu quy trình'], tools: ['AI chatbot', 'Prompt framework'],
    pageCount: 15, fileUrl: '/files/bai-3.pdf', color: '#f3dfbd'
  },
  {
    id: 4, code: 'PM.04', category: 'Quản trị dự án', shortTitle: 'Hợp tác trực tuyến',
    title: 'Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm',
    description: 'Tham gia dự án Study‑Tech cùng nhóm năm thành viên, quản lý nhiệm vụ và xây dựng nội dung Google Workspace.',
    objective: 'Thực hành phân rã nhiệm vụ, quản lý deadline, đồng biên tập và tổ chức kho dữ liệu chung trong môi trường số.',
    process: ['Theo dõi checklist và thời hạn trên Trello.', 'Biên soạn, phản hồi và đồng chỉnh sửa nội dung.', 'Kết nối Google Drive để nhóm truy cập tài liệu thống nhất.'],
    lesson: 'Công cụ không thay thế quản trị. Hiệu quả nhóm đến từ vai trò rõ, thời hạn minh bạch và nhịp phản hồi đều đặn.',
    skills: ['Project management', 'Làm việc nhóm', 'Giao tiếp số'], tools: ['Trello', 'Google Drive', 'Google Workspace'],
    pageCount: 8, fileUrl: '/files/bai-4.pdf', color: '#d8d8f2'
  },
  {
    id: 5, code: 'BRD.05', category: 'Sáng tạo thương hiệu', shortTitle: 'AI tạo sinh',
    title: 'Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung',
    description: 'Xây dựng nội dung truyền thông về thời trang và trang điểm tối giản của Gen Z năm 2026 bằng quy trình AI nhiều bước.',
    objective: 'Kết hợp nghiên cứu xu hướng, chiến lược nội dung và thẩm mỹ hình ảnh để tạo sản phẩm truyền thông có cá tính thương hiệu.',
    process: ['Gemini hỗ trợ nghiên cứu và lập dàn ý.', 'DALL‑E/Midjourney tạo tư liệu hình ảnh.', 'Canva/Firefly hoàn thiện bố cục và thông điệp.'],
    lesson: 'AI tăng tốc sản xuất, nhưng góc nhìn khách hàng, lựa chọn thương hiệu và quyết định biên tập cuối cùng vẫn thuộc về con người.',
    skills: ['Content strategy', 'Brand thinking', 'Creative direction'], tools: ['Gemini', 'DALL‑E', 'Canva AI'],
    pageCount: 9, fileUrl: '/files/bai-5.pdf', color: '#ffd5d0'
  },
  {
    id: 6, code: 'GOV.06', category: 'Quản trị trách nhiệm', shortTitle: 'AI có trách nhiệm',
    title: 'Sử dụng AI có trách nhiệm trong học tập và nghiên cứu',
    description: 'Phân tích định hướng AI tại UEB và thực hành tổng hợp tài liệu về tác động của lạm phát đến hành vi tiêu dùng Gen Z.',
    objective: 'Xây dựng nguyên tắc sử dụng AI minh bạch, bảo mật, có kiểm chứng và bảo đảm trách nhiệm cá nhân với mọi đầu ra.',
    process: ['Đối chiếu chính sách UEB và các trường khác.', 'Lập nhật ký prompt cho nhiệm vụ nghiên cứu.', 'Kiểm chứng nguồn, khai báo hỗ trợ AI và bảo vệ dữ liệu.'],
    lesson: 'Quản trị AI cũng là quản trị rủi ro: cần xác định ranh giới, kiểm soát chất lượng và chịu trách nhiệm với quyết định cuối cùng.',
    skills: ['AI governance', 'Liêm chính học thuật', 'Quản trị rủi ro'], tools: ['AI assistant', 'Nguồn học thuật'],
    pageCount: 6, fileUrl: '/files/bai-6.pdf', color: '#cde4e0'
  }
];

export const skills: Skill[] = [
  { name: 'Tư duy chiến lược', level: 88, description: 'Xác định mục tiêu, bối cảnh và tiêu chí trước khi lựa chọn công cụ hoặc giải pháp.' },
  { name: 'Nghiên cứu & dữ liệu', level: 86, description: 'Tìm kiếm, đánh giá và chuyển thông tin thành cơ sở cho quyết định.' },
  { name: 'Quản trị dự án số', level: 84, description: 'Phân rã nhiệm vụ, theo dõi tiến độ và phối hợp trên nền tảng trực tuyến.' },
  { name: 'Ứng dụng AI', level: 89, description: 'Dùng AI để tăng năng suất nhưng vẫn kiểm chứng và giữ quyền quyết định.' },
  { name: 'Truyền thông thương hiệu', level: 82, description: 'Kết hợp insight người dùng, nội dung và hình ảnh thành thông điệp nhất quán.' },
  { name: 'Quản trị trách nhiệm', level: 91, description: 'Minh bạch, bảo mật, tuân thủ và chịu trách nhiệm với sản phẩm số.' }
];
