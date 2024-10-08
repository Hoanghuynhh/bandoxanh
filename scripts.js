var center = [11.014420, 106.509115];

var map = L.map('map',{
    zoom: 11,
    minZoom: 3,
    maxZoom: 17,
    maxBoundsViscosity: 1.0,
    scrollWheelZoom: true,
    zoomControl: true,
}
).setView(center, 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

// Tùy chỉnh icon cho từng loại marker
var customIcon = L.icon({
    iconUrl: 'images/marker.png', // Icon cho loại 'num1'
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

var customIcon2 = L.icon({
    iconUrl: 'images/marker 2.png', // Icon cho loại 'num2'
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

// Nếu anh/chị muốn thêm loại marker khác, hãy định nghĩa thêm icon tương ứng
// var customIcon3 = L.icon({
//     iconUrl: 'images/marker3.png', // Icon cho loại 'num3'
//     iconSize: [32, 32],
//     iconAnchor: [16, 32],
//     popupAnchor: [0, -32]
// });

// Hàm để lấy icon dựa trên loại marker
function getIconByType(type) {
    switch(type) {
        case 'num1':
            return customIcon;
        case 'num2':
            return customIcon2;
        // case 'num3':
        //     return customIcon3;
        default:
            return customIcon; // Mặc định là customIcon
    }
}

// Hàm để lấy zIndexOffset dựa trên loại marker
function getZIndexOffset(type) {
    switch(type) {
        case 'num1':
            return 1000; // Loại 'num1' sẽ hiển thị trên cùng
        case 'num2':
            return 500;  // Loại 'num2' sẽ hiển thị dưới 'num1'
        // Nếu có thêm loại marker khác, hãy thêm các trường hợp tương ứng
        default:
            return 0;    // Mặc định
    }
}

// Dữ liệu các marker
var markersData = [
{
        type: 'num1',
        coords: [10.979099, 106.496899],
        images: [
            { src: 'images/N1/TTCC/TTCC 1.jpg', thumb: 'ttcc1.jpg' },
            { src: 'images/N1/TTCC/TTCC 2.jpg', thumb: 'ttcc2.jpg' },
            { src: 'images/N1/TTCC/TTCC 3.jpg', thumb: 'ttcc3.jpg' },
            { src: 'images/N1/TTCC/TTCC 4.jpg', thumb: 'ttcc4.jpg' }
        ],
        address: "Đền Tưởng Niệm Anh Hùng Liệt Sỹ Thị Trấn Củ Chi, Thị trấn Củ Chi, Huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Phối hợp Ban ngành đoàn thể Thị trấn dọn vệ sinh và trồng cây tại khuôn viên đền liệt sĩ Thị trấn."
    },
    {
        type: 'num1',
        coords: [11.091739, 106.513382],
        images: [
            { src: 'images/N1/ANT/ANT 1.jpg', thumb: 'ant1.jpg' },
            { src: 'images/N1/ANT/ANT 2.jpg', thumb: 'ant2.jpg' },
            { src: 'images/N1/ANT/ANT 3.jpg', thumb: 'ant3.jpg' },
            { src: 'images/N1/ANT/ANT 4.jpg', thumb: 'ant4.jpg' }
        ],
        address: "Đường Võ Thị Mè, ấp Gót Chàng, xã An Nhơn Tây, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Sáng ngày 26/5/2024, với tinh thần hăng hái của tuổi trẻ, các bạn đoàn viên, thanh niên xã An Nhơn Tây đã ra quân trồng và dặm vá 50 cây chuông vàng trên tuyến đường Võ Thị Mè, ấp Gót Chàng."
    },
    {
        type: 'num1',
        coords: [10.984096, 106.607323],
        images: [
            { src: 'images/N1/HP/HP 1.jpg', thumb: 'hp1.jpg' },
            { src: 'images/N1/HP/HP 2.jpg', thumb: 'hp2.jpg' },
            { src: 'images/N1/HP/HP 3.jpg', thumb: 'hp3.jpg' },
            { src: 'images/N1/HP/HP 4.jpg', thumb: 'hp4.jpg' }
        ],
        address: "Đường Huỳnh Thị Xưa ấp 7, xã Hoà Phú, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Sáng ngày 26/5/2024, Đoàn Thanh niên - Hội LHTN Việt Nam xã Hoà Phú tổ chức trồng cây trên Dầu đen và dọn vệ sinh trên tuyến đường Huỳnh Thị Xưa ấp 7."
    },
    {
        type: 'num1',
        coords: [11.033798, 106.487291],
        images: [
            { src: 'images/N1/NĐ/NĐ 1.jpg', thumb: 'nđ1.jpg' },
            { src: 'images/N1/NĐ/NĐ 2.jpg', thumb: 'nđ2.jpg' },
            { src: 'images/N1/NĐ/NĐ 3.jpg', thumb: 'nđ3.jpg' },
            { src: 'images/N1/NĐ/NĐ 4.jpg', thumb: 'nđ4.jpg' }
        ],
        address: "Đường Bà Thiên, ấp Ngã Tư, xã Nhuận Đức, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Sáng ngày 29/6/2024, Ban chỉ huy các chiến dịch tình nguyện hè xã Nhuận Đức tổ chức dọn dẹp vệ sinh, phát hoang bụi rậm và chăm sóc hoa trên tuyến đường Mẹ Việt Nam anh hùng Nguyễn Thị Đát. Bên cạnh đó, đã tổ chức ra mắt tuyến đường Sáng - Xanh - Sạch - Đẹp - Văn minh - An toàn trên địa bàn xã Nhuận Đức đó là tuyến đường Mẹ Việt Nam anh hùng Nguyễn Thị Đát, ấp Ngã Tư."
    },
    {
        type: 'num1',
        coords: [10.998784, 106.449076],
        images: [
            { src: 'images/N1/PH/PH 1.jpg', thumb: 'ph1.jpg' },
            { src: 'images/N1/PH/PH 2.jpg', thumb: 'ph2.jpg' },
            { src: 'images/N1/PH/PH 3.jpg', thumb: 'ph3.jpg' },
            { src: 'images/N1/PH/PH 4.jpg', thumb: 'ph4.jpg' }
        ],
        address: "Đường Lê Thị Long, ấp Ba Sa, xã Phước Hiệp, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Ngày 26/5/2024, Huyện Đoàn-Hội LHTN Việt Nam huyện Củ Chi tổ chức chương trình Lễ ra quân Ngày Chủ nhật xanh lần thứ 153-năm 2024 và thực hiện tuyến nội dung trồng 200 cây xanh (cây bò cạp nước) tại tuyến đường Lê Thị Long, ấp Ba Sa, xã Phước Hiệp."
    },
    {
        type: 'num1',
        coords: [10.970409, 106.514135],
        images: [
            { src: 'images/N1/PVA/PVA 1.jpg', thumb: 'pva1.jpg' },
            { src: 'images/N1/PVA/PVA 2.jpg', thumb: 'pva2.jpg' },
            { src: 'images/N1/PVA/PVA 3.jpg', thumb: 'pva3.jpg' },
            { src: 'images/N1/PVA/PVA 4.jpg', thumb: 'pva4.jpg' }
        ],
        address: "Bia tưởng niệm AHLS Trần Văn Chẩm - Nguyễn Văn Lịch, xã Phước Vĩnh An, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Sáng 26/5/2024, Đoàn viên thanh niên xã Phước Vĩnh An đã tổ chức hoạt động Ra quân vệ sinh trồng cây tại Bia tưởng niệm AHLS Trần Văn Chẩm - Nguyễn Văn Lịch;"
    },
    {
        type: 'num1',
        coords: [10.968585, 106.473170],
        images: [
            { src: 'images/N1/TAH/TAH 1.jpg', thumb: 'tah1.jpg' },
            { src: 'images/N1/TAH/TAH 2.jpg', thumb: 'tah2.jpg' },
            { src: 'images/N1/TAH/TAH 3.jpg', thumb: 'tah3.jpg' },
            { src: 'images/N1/TAH/TAH 4.jpg', thumb: 'tah4.jpg' }
        ],
        address: "Khu đất công ấp BT1 và BT1B, tuyến đường N46 ấp BT1, BT1A xã Tân An Hội, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Ngày 26/5/2024, Đoàn viên, thanh niên xã Tân An Hội phối hợp cùng BND ấp Bàu Tre 1, Bàu Tre 1A, Bàu Tre 1B ra quân trồng 200 cây bằng lăng, cây dầu tại Khu đất công ấp BT1 và BT1B, tuyến đường N46 ấp BT1, BT1A."
    },
    {
        type: 'num1',
        coords: [10.938403, 106.535069],
        images: [
            { src: 'images/N1/TPT/TPT 1.jpg', thumb: 'tpt1.jpg' },
            { src: 'images/N1/TPT/TPT 2.jpg', thumb: 'tpt2.jpg' },
            { src: 'images/N1/TPT/TPT 3.jpg', thumb: 'tpt3.jpg' }
        ],
        address: "Đường Lê Thị Sắc, xã Tân Phú Trung, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Ngày 26/5/2024, Đoàn Thanh niên - Hội LHTN xã ra quân Ngày chủ nhật xanh lần thứ 153 với sự hưởng ứng của đông đảo đoàn viên, hội viên, thanh niên và người dân."
    },
    {
        type: 'num1',
        coords: [10.986219, 106.563030],
        images: [
            { src: 'images/N1/TTT/TTT 1.jpg', thumb: 'ttt1.jpg' },
            { src: 'images/N1/TTT/TTT 2.jpg', thumb: 'ttt2.jpg' },
            { src: 'images/N1/TTT/TTT 3.jpg', thumb: 'ttt3.jpg' },
            { src: 'images/N1/TTT/TTT 4.jpg', thumb: 'ttt4.jpg' }
        ],
        address: "Điểm sinh hoạt cộng đồng Ấp 2, xã Tân Thạnh Tây, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Ngày 26/5/2024, Đoàn viên, Hội viên, thanh niên xã Tân Thạnh Tây ra quân hưởng ứng Ngày chủ nhật xanh lần thứ 153: chỉnh trang khuôn viên, nhổ cỏ và trồng dặm hoa kiểng tại công trình Điểm sinh hoạt cộng đồng Ấp 2."
    },
    {
        type: 'num1',
        coords: [10.942103, 106.510058],
        images: [
            { src: 'images/N1/TTH/TTH 1.jpg', thumb: 'tth1.jpg' },
            { src: 'images/N1/TTH/TTH 2.jpg', thumb: 'tth2.jpg' },
            { src: 'images/N1/TTH/TTH 3.jpg', thumb: 'tth3.jpg' },
            { src: 'images/N1/TTH/TTH 4.jpg', thumb: 'tth4.jpg' }
        ],
        address: "Tuyến đường 54, 51, tuyến đường Lê Thị Siêng, xã Tân Thông Hội, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Sáng ngày 26/5/2024, Đoàn xã Tân Thông Hội phối hợp cùng BND các ấp thực hiện dọn dẹp vệ sinh, trồng mới 300 cây chuông vàng trên tuyến đường số 51, số 54 và Lê Thị Siêng."
    },
    {
        type: 'num2',
        coords: [11.037781, 106.489407],
        images: [
            { src: 'images/N2/NĐ/NĐ 1.jpg', thumb: 'nđ1.jpg' },
            { src: 'images/N2/NĐ/NĐ 2.jpg', thumb: 'nđ2.jpg' },
            { src: 'images/N2/NĐ/NĐ 3.jpg', thumb: 'nđ3.jpg' },
            { src: 'images/N2/NĐ/NĐ 4.jpg', thumb: 'nđ4.jpg' }
        ],
        address: "Tuyến đường Mẹ Việt Nam anh hùng Nguyễn Thị Đát, ấp Ngã Tư, xã Nhuận Đức, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Ra quân dọn dẹp vệ sinh, phát hoang bụi rậm, tuyến đường Mẹ Việt Nam anh hùng Nguyễn Thị Đát, ấp Ngã Tư, xã Nhuận Đức."
    },
    {
        type: 'num2',
        coords: [10.988380, 106.573355],
        images: [
            { src: 'images/N2/TTT/TTT 1.jpg', thumb: 'ttt1.jpg' },
            { src: 'images/N2/TTT/TTT 3.jpg', thumb: 'ttt2.jpg' },
            { src: 'images/N2/TTT/TTT 2.jpg', thumb: 'ttt3.jpg' },
            { src: 'images/N2/TTT/TTT 4.jpg', thumb: 'ttt4.jpg' }
        ],
        address: "Tuyến đường số 2, ấp 4, xã Tân Thạnh Tây, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Sáng ngày 29/6/2024, Đoàn - Hội, Ban chỉ huy các chiến dịch tình nguyện hè xã phối hợp Chi đoàn Phòng An ninh Điều tra Công an Thành phố Hồ Chí Minh tổ chức chương trình hưởng hứng hoạt động cao điểm Chiến sĩ tình nguyện xây dựng đô thị sáng - xanh - sạch - đẹp - văn minh - an toàn ra quân thực hiện tuyến đường số 2, ấp 4; trao tặng 10 phần quà cho học sinh và 05 phần quà cho gia đình chính sách khó khăn, tổng trị giá 7.500.000₫."
    },
    {
        type: 'num2',
        coords: [10.934005, 106.537744],
        images: [
            { src: 'images/N2/TPT/TPT 1.jpg', thumb: 'tpt1.jpg' },
            { src: 'images/N2/TPT/TPT 3.jpg', thumb: 'tpt2.jpg' },
            { src: 'images/N2/TPT/TPT 2.jpg', thumb: 'tpt3.jpg' },
            { src: 'images/N2/TPT/TPT 4.jpg', thumb: 'tpt4.jpg' },
            { src: 'images/N2/TPT/TPT 5.jpg', thumb: 'tpt5.jpg' }
        ],
        address: "Tuyến đường 95, ấp Bến Đò 2A, xã Tân Phú Trung, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Sáng ngày 29/6/2024, Đoàn Thanh niên - Hội LHTN xã phối hợp với Ủy ban nhân dân xã Tân Phú Trung đã tổ chức Lễ phát động các hoạt động hưởng ứng Tháng hành động vì môi trường năm 2024 dọn dẹp vệ sinh môi trường, lập lại trật tự lòng, lề đường các tuyến đường Xanh - Sạch - Đẹp - An toàn và tiếp tục thực hiện bóc xóa bóc gỡ quảng cáo sai quy định, trồng cây trên các tuyến đường  trên địa bàn xã."
    },
    {
        type: 'num2',
        coords: [10.973569, 106.498603],
        images: [
            { src: 'images/N2/TTCC/TTCC 1.jpg', thumb: 'ttcc1.jpg' },
            { src: 'images/N2/TTCC/TTCC 3.jpg', thumb: 'ttcc2.jpg' },
            { src: 'images/N2/TTCC/TTCC 2.jpg', thumb: 'ttcc3.jpg' },
            { src: 'images/N2/TTCC/TTCC 4.jpg', thumb: 'ttcc4.jpg' },
            { src: 'images/N2/TTCC/TTCC 5.jpg', thumb: 'ttcc5.jpg' }
        ],
        address: "Tuyến hẻm 64, đường Nguyễn Văn Ni, khu phố 6, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Ngày 29/6/2024, Ban chỉ huy các chiến dịch tình nguyện hè, Đoàn - Hội Thị trấn Củ Chi ra quân thực hiện các hoạt động: Ra mắt tuyến đường “Sáng - Xanh - Sạch đẹp - An toàn”  hẻm 64, đường Nguyễn Văn Ni, khu phố 6 và trồng 60 cây hoa giấy dọc tuyến hẻm; Sơn, sửa chữa sân chơi thiếu nhi tại khu phố 8; Xây dựng và cải tạo góc không gian xanh tại Văn phòng Khu phố 2 - 2A;"
    },
    {
        type: 'num2',
        coords: [11.005303, 106.429650],
        images: [
            { src: 'images/N2/PT/PT 1.jpg', thumb: 'pt1.jpg' },
            { src: 'images/N2/PT/PT 3.jpg', thumb: 'pt2.jpg' },
            { src: 'images/N2/PT/PT 2.jpg', thumb: 'pt3.jpg' },
            { src: 'images/N2/PT/PT 4.jpg', thumb: 'pt4.jpg' },
            { src: 'images/N2/PT/PT 5.jpg', thumb: 'pt5.jpg' }
        ],
        address: "Tuyến đường 644 ấp Phước Hưng, xã Phước Thạnh, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Ngày 29/6/2024, Ban chỉ huy các chiến dịch tình nguyện hè, Đoàn - Hội Thị trấn Củ Chi ra quân thực hiện các hoạt động: Ra mắt tuyến đường “Sáng - Xanh - Sạch đẹp - An toàn”  hẻm 64, đường Nguyễn Văn Ni, khu phố 6 và trồng 60 cây hoa giấy dọc tuyến hẻm; Sơn, sửa chữa sân chơi thiếu nhi tại khu phố 8; Xây dựng và cải tạo góc không gian xanh tại Văn phòng Khu phố 2 - 2A;"
    },
    {
        type: 'num2',
        coords: [11.143576, 106.468303],
        images: [
            { src: 'images/N2/PMH/PMH 1.jpg', thumb: 'pmh1.jpg' },
            { src: 'images/N2/PMH/PMH 3.jpg', thumb: 'pmh2.jpg' },
            { src: 'images/N2/PMH/PMH 2.jpg', thumb: 'pmh3.jpg' },
            { src: 'images/N2/PMH/PMH 4.jpg', thumb: 'pmh4.jpg' }
        ],
        address: "Đoạn đường tỉnh lộ 15, địa phận ấp Phú Hiệp, xã Phú Mỹ Hưng, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Sáng ngày 29/6/2024, tuổi trẻ xã Phú Mỹ Hưng ra mắt tuyến đường Sáng – Xanh – Sạch – Đẹp – Văn minh – An toàn năm 2024 tại đoạn đường tỉnh lộ 15, địa phận ấp Phú Hiệp với các nội dung Dọn vệ sinh, cắt cỏ dọc tuyến đường; Thực hiện 30 bồn cây xanh tái chế từ vỏ xe cũ tạo mảng xanh dọc đoạn đường cờ tỉnh lộ 15 (Giai đoạn 2 công trình Tự hào Phú Mỹ Hưng rực rỡ cờ hoa)"
    },
    {
        type: 'num2',
        coords: [11.091560, 106.512957],
        images: [
            { src: 'images/N2/ANT/ANT.jpg', thumb: 'ant1.jpg' },
            { src: 'images/N2/ANT/ANT 1.jpg', thumb: 'ant2.jpg' },
            { src: 'images/N2/ANT/ANT 2.jpg', thumb: 'ant3.jpg' },
            { src: 'images/N2/ANT/ANT 3.jpg', thumb: 'ant4.jpg' }
        ],
        address: "Tuyến đường Tô Thị Keo, ấp Chợ Củ 2, xã An Nhơn Tây, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Sáng ngày 29/6/2024, tuổi trẻ xã An Nhơn Tây ra mắt tuyến đường Sáng – Xanh – Sạch – Đẹp – Văn minh – An toàn năm 2024 tại tuyến đường Tô Thị  Keo, ấp Chợ Củ 2 với các nội dung: Dọn vệ sinh dọc tuyến đường; Phát tờ bướm tuyên truyền Khu dân cư 5 KHÔNG - 3 ĐẸP"
    },
    {
        type: 'num2',
        coords: [10.984222, 106.590272],
        images: [
            { src: 'images/N2/TA/TA 1.jpg', thumb: 'ta1.jpg' },
            { src: 'images/N2/TA/TA 2.jpg', thumb: 'ta2.jpg' },
            { src: 'images/N2/TA/TA 3.jpg', thumb: 'ta3.jpg' },
            { src: 'images/N2/TA/TA 4.jpg', thumb: 'ta4.jpg' }
        ],
        address: "Toàn tuyến đường 457, tổ 6, ấp Chợ, xã Trung An, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Hưởng ứng hoạt động cao điểm Chiến sĩ tình nguyện xây dựng đô thị “Sáng - Xanh - Sạch - Đẹp - Văn minh - An toàn”. BCH các Chiến dịch tình nguyện hè phối hợp cùng UB. MTTQ Việt Nam xã khánh thành Công trình “Bức tranh bức hoạ” tại đường tổ 6, ấp Chợ gắn với chào mừng thành công Đại hội Đại biểu Hội LHTN Việt Nam xã Trung An, lần thứ VII và chào mừng Đại hội Đại biểu Hội LHTN Việt Nam huyện Củ Chi lần VII."
    },
    {
        type: 'num2',
        coords: [11.047827, 106.518594],
        images: [
            { src: 'images/N2/PVC/PVC 1.jpg', thumb: 'pvc1.jpg' },
            { src: 'images/N2/PVC/PVC 2.jpg', thumb: 'pvc2.jpg' },
            { src: 'images/N2/PVC/PVC 3.jpg', thumb: 'pvc3.jpg' },
            { src: 'images/N2/PVC/PVC 4.jpg', thumb: 'pvc4.jpg' }
        ],
        address: "Toàn tuyến đường Bàu Lách, Ấp 4, xã Phạm Văn Cội, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Hưởng ứng Ngày hoạt động cao điểm “Chiến sĩ tình nguyện chung tay xây dựng nông thôn mới”, xây dựng đô thị văn minh và ra quân Ngày chủ nhật xanh lần thứ 154. Sáng ngày 21/7/2024, Đoàn - Hội xã Phạm Văn Cội tổ chức ra quân dọn dẹp vệ sinh tuyến Đường Bàu Lách, Ấp 4, hoạt động thu hút hơn 30 đoàn viên, thanh niên tham gia "
    },
    {
        type: 'num2',
        coords: [10.928018, 106.633432],
        images: [
            { src: 'images/N2/BM/BM 1.jpg', thumb: 'bm1.jpg' },
            { src: 'images/N2/BM/BM 2.jpg', thumb: 'bm2.jpg' },
            { src: 'images/N2/BM/BM 3.jpg', thumb: 'bm3.jpg' },
            { src: 'images/N2/BM/BM 4.jpg', thumb: 'bm4.jpg' }
        ],
        address:"Tuyến đường 373, ấp 14, xã Bình Mỹ, huyện Củ Chi, TP. Hồ Chí Minh",
        description: ""
    },
    {
        type: 'num2',
        coords: [10.968330, 106.530100],
        images: [
            { src: 'images/N2/PVA/PVA 1.jpg', thumb: 'pva1.jpg' },
            { src: 'images/N2/PVA/PVA 2.jpg', thumb: 'pva2.jpg' },
            { src: 'images/N2/PVA/PVA 3.jpg', thumb: 'pva3.jpg' },
            { src: 'images/N2/PVA/PVA 4.jpg', thumb: 'pva4.jpg' }
        ],
        address: "Tuyến đường Đặng Thị Bến, ấp 1, xã Phước Vĩnh An, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Ngày 29/6, Đoàn - Hội xã Phước Vĩnh An ra mắt tuyến đường Đặng Thị Bến, ấp 1 tuyến đường “Sáng - xanh - sạch - đẹp - văn minh - an toàn” và chiến sĩ Hành quân xanh xã thực hiện không gian xanh nơi sinh hoạt"
    },
    {
        type: 'num2',
        coords: [10.963846, 106.473080],
        images: [
            { src: 'images/N2/TAH/TAH 1.jpg', thumb: 'tah1.jpg' }
        ],
        address: "Tuyến đường liên ấp Bàu Tre 1, Bàu Tre 1A, Mũi Lớn 1, Mũi Lớn 1A, xã Tân An Hội, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Ngày 29/6/2024, Ban chỉ huy chiến dịch tình nguyện hè, Đoàn - Hội xã Tân An Hội ra quân thực hiện Ra mắt tuyến đường Sáng - Xanh - Sạch - Đẹp - Văn minh - An Toàn, tuyến đường liên ấp Bàu Tre 1, Bàu Tre 1A, Mũi Lớn 1, Mũi Lớn 1A, xã Tân An Hội, huyện Củ Chi, TP. Hồ Chí Minh "
    },
    {
        type: 'num2',
        coords: [10.947681, 106.512879],
        images: [
            { src: 'images/N2/TTH/TTH 1.jpg', thumb: 'tth1.jpg' },
            { src: 'images/N2/TTH/TTH 2.jpg', thumb: 'tth2.jpg' },
            { src: 'images/N2/TTH/TTH 3.jpg', thumb: 'tth3.jpg' },
            { src: 'images/N2/TTH/TTH 4.jpg', thumb: 'tth4.jpg' }
        ],
        address: "Toàn tuyến đường tuyến đường Phan Thị Cộng, ấp Trung, xã Tân Thông Hội, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Đây là hoạt động có ý nghĩa thiết thực nhằm nâng cao nhận thức cho các em về công tác bảo vệ môi trường, xây dựng môi trường học tập, môi trường sống sáng – xanh – sạch – đẹp. Qua đó, góp phần lan tỏa ý thức tích cực tạo cảnh quan, bảo vệ môi trường cho thế hệ trẻ"
    },
    {
        type: 'num2',
        coords: [10.998629, 106.451022],
        images: [
            { src: 'images/N2/PH/PH 1.jpg', thumb: 'ph1.jpg' },
            { src: 'images/N2/PH/PH 2.jpg', thumb: 'ph2.jpg' },
            { src: 'images/N2/PH/PH 3.jpg', thumb: 'ph3.jpg' },
            { src: 'images/N2/PH/PH 4.jpg', thumb: 'ph4.jpg' }
        ],
        address: "Tuyến đường Lê Thị Long, ấp Ba Sa, xã Phước Hiệp, huyện Củ Chi, TP. Hồ Chí Minh",
        description: ""
    },
    {
        type: 'num2',
        coords: [10.991119, 106.396855],
        images: [
            { src: 'images/N2/TM/TM 1.jpg', thumb: 'tm1.jpg' },
            { src: 'images/N2/TM/TM 2.jpg', thumb: 'tm2.jpg' },
            { src: 'images/N2/TM/TM 3.jpg', thumb: 'tm3.jpg' },
            { src: 'images/N2/TM/TM 4.jpg', thumb: 'tm4.jpg' }
        ],
        address: "Tuyến đường 679, ấp Bình Thượng 1, xã Thái Mỹ, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Sáng ngày 29/6/2024, Ban Chỉ huy Chiến dịch tình nguyện hè, Đoàn - Hội xã Thái Mỹ phối hợp cùng BCH quân sự xã tổ chức hoạt động trao tặng 20 thùng rác cho hộ dân trên tuyến đường thanh niên và thực hiện cải tạo cảnh quan, dọn dẹp vệ sinh, xóa bảng quảng cáo dọc  tuyến đường 679, ấp Bình Thượng 1, xã Thái Mỹ."
    },
    {
        type: 'num2',
        coords: [11.023641, 106.457566],
        images: [
            { src: 'images/N2/TLH/TLH 1.jpg', thumb: 'tlh1.jpg' },
            { src: 'images/N2/TLH/TLH 2.jpg', thumb: 'tlh2.jpg' },
            { src: 'images/N2/TLH/TLH 3.jpg', thumb: 'tlh3.jpg' },
            { src: 'images/N2/TLH/TLH 4.jpg', thumb: 'tlh4.jpg' }
        ],
        address: "Tuyến đường Tỉnh lộ 2, xã Trung Lập Hạ, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Sáng ngày, 29/6/2024, Ban Chỉ huy Chiến dịch tình nguyện hè, Đoàn - Hội xã Trung Lập Hạ phối hợp MTTQ và các đoàn thể xã tổ chức ra quân ngày chủ nhật xanh phát quang trên tuyến đường Tỉnh lộ 2, đường 578."
    },
    {
        type: 'num2',
        coords: [11.048792, 106.435401],
        images: [
            { src: 'images/N2/TLT/TLT 1.jpg', thumb: 'tlt1.jpg' },
            { src: 'images/N2/TLT/TLT 2.jpg', thumb: 'tlt2.jpg' },
            { src: 'images/N2/TLT/TLT 3.jpg', thumb: 'tlt3.jpg' },
            { src: 'images/N2/TLT/TLT 4.jpg', thumb: 'tlt4.jpg' }
        ],
        address: "Tuyến đường Nguyễn Thị Náo, ấp Ràng, xã Trung Lập Thượng, huyện Củ Chi, TP. Hồ Chí Minh",
        description: "Sáng ngày, 29/6/2024, Ban Chỉ huy Chiến dịch tình nguyện hè, Đoàn - Hội xã Trung Lập Thượng phối hợp tổ chức dẹp vệ sinh, phát quang tuyến đường Nguyễn Thị Náo ấp Ràng do Đoàn thanh niên quản lý ."
    },
    // Thêm các marker khác ở đây theo cấu trúc tương tự
];

function createPopupContent(marker, index) {
    var popupDiv = document.createElement('div');
    popupDiv.classList.add('custom-popup');

    var swiperContainer = document.createElement('div');
    swiperContainer.classList.add('swiper', 'popup-swiper-' + index);

    var swiperWrapper = document.createElement('div');
    swiperWrapper.classList.add('swiper-wrapper');

    marker.images.forEach(function(image) {
        var swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');

        var img = document.createElement('img');
        img.src = image.src;
        img.alt = 'Image';
        img.setAttribute('data-src', image.src);

        swiperSlide.appendChild(img);
        swiperWrapper.appendChild(swiperSlide);
    });

    swiperContainer.appendChild(swiperWrapper);

    var pagination = document.createElement('div');
    pagination.classList.add('swiper-pagination');
    swiperContainer.appendChild(pagination);

    var prevButton = document.createElement('div');
    prevButton.classList.add('swiper-button-prev');
    swiperContainer.appendChild(prevButton);

    var nextButton = document.createElement('div');
    nextButton.classList.add('swiper-button-next');
    swiperContainer.appendChild(nextButton);

    popupDiv.appendChild(swiperContainer);

    var addressP = document.createElement('p');
    addressP.innerHTML = `<strong>${marker.address}</strong>`;
    popupDiv.appendChild(addressP);

    var descriptionP = document.createElement('p');
    descriptionP.textContent = marker.description;
    popupDiv.appendChild(descriptionP);

    return popupDiv;
}
var treePlantingList = document.getElementById('tree-planting-list');
var greenRouteList = document.getElementById('green-route-list');
markersData.forEach(function(marker, index) {
    var popupContent = createPopupContent(marker, index);
    var leafletPopup = L.popup({
        maxWidth: 300
    }).setContent(popupContent);

    var leafletMarker = L.marker(marker.coords, { 
        icon: getIconByType(marker.type),
        zIndexOffset: getZIndexOffset(marker.type)
    }).addTo(map)
    .bindPopup(leafletPopup);

    leafletMarker.on('popupopen', function() {
        var currentPopup = this.getPopup().getElement();
        var swiperElement = currentPopup.querySelector('.swiper');
        var swiperInstance = new Swiper(swiperElement, {
            loop: true,
            pagination: {
                el: currentPopup.querySelector('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: currentPopup.querySelector('.swiper-button-next'),
                prevEl: currentPopup.querySelector('.swiper-button-prev'),
            },
        });

        var lightbox = lightGallery(currentPopup.querySelector('.swiper'), {
            selector: 'img',
            plugins: [lgZoom, lgFullscreen],
            speed: 500,
            mobileSettings: {
                controls: false,
                showCloseIcon: true,
                download: false,
                rotate: false
            }
        });

        var images = currentPopup.querySelectorAll('.swiper-slide img');
        images.forEach(function(img, imgIndex) {
            img.addEventListener('click', function() {
                lightbox.openGallery(imgIndex);
            });
        });
    });
});
    var RecenterControl = L.Control.extend({
    options: { position: 'topleft' },
    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-recenter');
        var button = L.DomUtil.create('a', 'recenter-button', container);
        button.title = 'Quay về vị trí ban đầu';
        button.innerHTML = '<i class="fa-solid fa-rotate-right"></i>';

        L.DomEvent.on(button, 'click', L.DomEvent.stopPropagation)
                .on(button, 'click', L.DomEvent.preventDefault)
                .on(button, 'click', function () {
                    map.flyTo(center, 11, { duration: 1.5 });
                });

        return container;
    }
});
var leaflets = [];
var RecenterControl = L.Control.extend({
options: { position: 'topleft' },
onAdd: function (map) {
    var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
    var button = L.DomUtil.create('a', 'recenter-button', container);
    button.title = 'Quay về vị trí ban đầu';
    button.innerHTML = '<i class="fa-solid fa-rotate-right"></i>';

    L.DomEvent.on(button, 'click', L.DomEvent.stopPropagation)
        .on(button, 'click', L.DomEvent.preventDefault)
        .on(button, 'click', function () {
            leaflets.forEach(function(marker) {
                marker.closePopup();
            });
            map.flyTo(center, 11, { duration: 1.5 });
        });

    return container;
}
});

map.addControl(new RecenterControl());

function toggleMenu() {
    var menu = document.getElementById('location-menu');
    menu.classList.toggle('menu-expanded');
}

var currentPopup = null;

var locationsList = document.getElementById('locations-list');

markersData.forEach(function(markerData, index) {
    var popupContent = createPopupContent(markerData, index);
    var leafletPopup = L.popup({ maxWidth: 300 }).setContent(popupContent);
    var leafletMarker = L.marker(markerData.coords, {
        icon: getIconByType(markerData.type)
    }).addTo(map).bindPopup(leafletPopup);
    leaflets.push(leafletMarker);
    leafletMarker.on('popupopen', function() {
        var currentPopup = this.getPopup().getElement();
        var swiperElement = currentPopup.querySelector('.swiper');
        var swiperInstance = new Swiper(swiperElement, {
            loop: true,
            pagination: { el: currentPopup.querySelector('.swiper-pagination'), clickable: true },
            navigation: { nextEl: currentPopup.querySelector('.swiper-button-next'), prevEl: currentPopup.querySelector('.swiper-button-prev') },
        });
        const lightboxContainer = currentPopup.querySelector('.swiper');
        if (lightboxContainer.lightGalleryData) {
        lightboxContainer.lightGalleryData.destroy(true);
        }
        lightGallery(currentPopup.querySelector('.swiper'), {
            selector: 'img',
            plugins: [lgZoom, lgFullscreen],
            speed: 500,
            mobileSettings: { controls: false, showCloseIcon: true, download: false, rotate: false }
        });
    });
    
    var listItem = document.createElement('li');
    listItem.textContent = markerData.address;
    listItem.onclick = function() {
        if (currentPopup) {
            currentPopup.closePopup();
        }
        map.flyTo(markerData.coords, 17, { duration: 1.5, animate: true });
        map.once('moveend', function() {
            leafletMarker.openPopup();
            currentPopup = leafletMarker;
        });
    };

    if (markerData.type === 'num1') {
        treePlantingList.appendChild(listItem);
    } else if (markerData.type === 'num2') {
        greenRouteList.appendChild(listItem);
    }
});

// Custom Legend Control
var LegendControl = L.Control.extend({
    options: { position: 'bottomleft' },
    
    onAdd: function(map) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-legend');
        container.style.backgroundColor = '#ffffff90';
        container.style.padding = '10px';
        container.style.width = 'auto';
        container.style.maxWidth = '200px';
        container.style.fontSize = '0.9em';
        container.style.zIndex = '800';
        
        container.innerHTML += `
            <div style="display: flex; align-items: center; margin-bottom: 5px;">
                <img src='images/marker.png' alt='Marker 1' style='width: 20px; height: 20px; margin-right: 5px;' />
                <span>Địa điểm trồng cây xanh</span>
            </div>
            <div style="display: flex; align-items: center;">
                <img src='images/marker 2.png' alt='Marker 2' style='width: 20px; height: 20px; margin-right: 5px;' />
                <span>Tuyến đường Sáng - Xanh - Sạch - Đẹp - Văn minh - An Toàn</span>
            </div>
        `;
        
        return container;
    }
});

// Add Legend Control to the Map
map.addControl(new LegendControl());
