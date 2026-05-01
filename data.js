const portfolioData = {
    header: {
        name: "PGS. TS. Mai Huỳnh Cang",
        title: "Phó Trưởng khoa Công nghệ Hóa học & Thực phẩm",
        institution: "Trường Đại học Nông Lâm TP.HCM",
        motto: `"Tối ưu hóa các hợp chất thiên nhiên bằng công nghệ tiên tiến để tạo ra các sản phẩm giá trị gia tăng, an toàn và bền vững."`,
        image: "cocang.jpg.png" // Bạn hãy để ảnh tên 'cocang.jpg' vào cùng thư mục với file này
    },
    about: {
        education: "Tiến sĩ Kỹ thuật (2014) tại Universite Libre de Bruxelles (Vương Quốc Bỉ). Thạc sĩ Sản phẩm sinh học & Công nghệ chuyển hóa (2007) tại Đại học Montpellier 2 (Pháp).",
        mission: "Nghiên cứu chuyên sâu về công nghệ lọc màng (Cross-Flow Filtration), vi nang hóa (Microencapsulation) và hạt nano lipid (SLNs) để bảo quản các hoạt chất sinh học quý từ nông sản Việt Nam."
    },
    interests: [
        { icon: "fas fa-pills", title: "Microencapsulation", desc: "Công nghệ vi nang bảo vệ tinh dầu và hoạt chất kém bền." },
        { icon: "fas fa-atom", title: "Nanotechnology", desc: "Phát triển hạt nano lipid rắn (SLNs) ứng dụng trong dược thực phẩm." },
        { icon: "fas fa-filter", title: "Membrane Tech", desc: "Ứng dụng lọc màng tiếp tuyến trong chế biến nước quả và tinh dầu." },
        { icon: "fas fa-recycle", title: "Agri-Waste", desc: "Tận dụng phụ phẩm nông nghiệp (vỏ bưởi, thanh long) tạo giá trị gia tăng." }
    ],
    publications: {
        metrics: { 
            hIndex: 17,      
            i10Index: 27, 
            citations: 955 
        },
        categories: [
            {
                type: "Công bố Quốc tế tiêu biểu (Từ Google Scholar)",
                items: [
                    "Microencapsulation of Lemongrass (Cymbopogon citratus) Essential Oil via Spray Drying: Effects of Feed Emulsion Parameters (2019).",
                    "Optimization of Homogenization Conditions for Gac (Momordica cocochinensis Spreng) Oil-Loaded Solid Lipid Nanoparticles (SLNs) (2017).",
                    "Application of Cross-Flow Filtration Technique in Purification and Concentration of Juice from Vietnamese Fruits (2017).",
                    "Kinetic Studies on Extraction of Essential Oil from Lemongrass Leaves by Steam Distillation (2020).",
                    "Bioactive Compounds from Red Cabbage by Microwave-assisted Extraction: Anthocyanin, Total Phenolic Compounds and Antioxidant Activity (2020)."
                ]
            },
            {
                type: "Sách & Giáo trình Xuất bản",
                items: [
                    "Giáo trình Chế biến Dầu và Chất béo (Chủ biên, NXB Đại học Quốc gia TP.HCM, 2020).",
                    "Kỹ thuật trích ly và các hợp chất tự nhiên (Tài liệu giảng dạy chuyên ngành)."
                ]
            }
        ]
    },
    projects: [
        {
            title: "Nghiên cứu hệ thống vi nang (Microencapsulation) bảo vệ tinh dầu",
            role: "Trưởng nhóm nghiên cứu",
            details: "Sử dụng kỹ thuật sấy phun để bọc tinh dầu sả chanh, giúp giữ nguyên hoạt tính kháng khuẩn và mùi hương trong thời gian dài."
        },
        {
            title: "Ứng dụng Nano Lipid (SLNs) nâng cao độ bền của dầu Gấc",
            role: "Chủ nhiệm đề tài",
            details: "Tối ưu hóa các hạt nano kích thước siêu nhỏ để bảo vệ Carotenoid trong dầu Gấc khỏi tác động của ánh sáng và nhiệt độ."
        },
        {
            title: "Sản xuất màng bao bì thông minh từ Anthocyanin hoa đậu biếc",
            role: "Cố vấn khoa học",
            details: "Phát triển loại màng sinh học có khả năng đổi màu khi thực phẩm (thịt, cá) bắt đầu có dấu hiệu hư hỏng."
        }
    ],
    teaching: {
        courses: [
            "Công nghệ màng lọc và ứng dụng",
            "Chế biến dầu và chất béo",
            "Công nghệ các hợp chất thiên nhiên",
            "Hóa lý và Hóa keo"
        ],
        supervision: "Hướng dẫn thành công hơn 20 học viên Cao học và hàng trăm sinh viên tốt nghiệp ngành Công nghệ Hóa học."
    },
    awards: [
        "Phó Giáo sư ngành Công nghệ Hóa học (2020).",
        "Học bổng Tiến sĩ toàn phần từ Quỹ Fonds Xénophilia (Bỉ).",
        "Nhiều bài báo đạt chỉ số trích dẫn (Citations) cao nhất trong lĩnh vực Công nghệ Thực phẩm tại NLU."
    ],
    service: [
        "Phó Trưởng khoa Công nghệ Hóa học & Thực phẩm - Nông Lâm.",
        "Thành viên Hội đồng Khoa học ngành Công nghệ Thực phẩm.",
        "Phản biện cho các tạp chí ISI uy tín về lĩnh vực Hóa học và Quy trình thiết bị."
    ]
};