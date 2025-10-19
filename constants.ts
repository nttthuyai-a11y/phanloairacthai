
import type { ReportDataMap } from './types';

export const TM_MODEL_URL = "https://teachablemachine.withgoogle.com/models/wjYFKIbll/";

export const REPORT_DATA: ReportDataMap = {
  "taiche": {
    summary: "Rác có giá trị, có thể biến thành đồ mới. Ví dụ: <span class='highlight-action'>Chai nhựa PET, lon nhôm, giấy, bìa carton sạch.</span>",
    thu_gom: `
      <h4>Cách Thu Gom:</h4>
      <ul>
          <li>✔️ <span class='highlight-action'>Làm sạch (Rửa Tráng):</span> Bắt buộc phải rửa sạch chai, hộp đựng thực phẩm để tránh làm bẩn các loại rác tái chế khác.</li>
          <li>✔️ <span class='highlight-action'>Gấp Gọn:</span> Ép dẹp lon, hộp giấy để tiết kiệm không gian chứa.</li>
          <li>✔️ <span class='highlight-action'>Phân loại đúng:</span> Để riêng giấy, nhựa, kim loại nếu có thể.</li>
      </ul>
      <h4>Nơi Bỏ Rác:</h4>
      <ul>
          <li>Bỏ vào thùng rác dành cho <span class='highlight-action'>Rác Tái Chế</span> (thường là thùng màu <span class='highlight-action'>Xanh Dương</span> hoặc <span class='highlight-action'>Vàng</span>).</li>
      </ul>
    `,
    tac_hai: `
      <h4>Tác hại (Nếu không tái chế):</h4>
      <ul>
          <li>❌ <span class='highlight-bad'>Lãng phí Tài nguyên:</span> Phải khai thác thêm gỗ, dầu mỏ, quặng kim loại để sản xuất đồ mới.</li>
          <li>❌ <span class='highlight-bad'>Ô nhiễm Lâu Dài:</span> Nhựa mất 100-1000 năm để phân hủy, gây ô nhiễm đất và nước.</li>
      </ul>
      <h4>Lợi ích (Khi tái chế):</h4>
      <ul>
          <li>✅ <span class='highlight-good'>Tiết kiệm Năng lượng:</span> Tái chế nhôm tiết kiệm 95% năng lượng so với sản xuất mới.</li>
          <li>✅ <span class='highlight-good'>Bảo vệ Môi trường:</span> Giảm lượng rác thải ra bãi rác, giảm khí nhà kính.</li>
      </ul>
    `,
    tai_su_dung: `
      <h4>Ý tưởng Sáng tạo:</h4>
      <ul>
          <li>🎨 Dùng chai nhựa làm chậu cây, hộp bút, đồ chơi.</li>
          <li>🎨 Dùng lon nhôm làm đèn lồng, đồ trang trí.</li>
          <li>🎨 Dùng bìa carton để làm nhà cho thú cưng, mô hình, hoặc đồ thủ công.</li>
      </ul>
    `
  },
  "huuco": {
    summary: "Rác dễ phân hủy trong tự nhiên, có thể làm phân bón. Ví dụ: <span class='highlight-action'>Thức ăn thừa, vỏ trái cây, rau củ, lá cây.</span>",
    thu_gom: `
      <h4>Cách Thu Gom:</h4>
      <ul>
          <li>✔️ <span class='highlight-action'>Để riêng:</span> Không lẫn lộn với các loại rác khác, đặc biệt là nhựa và hóa chất.</li>
          <li>✔️ <span class='highlight-action'>Dùng thùng có nắp đậy:</span> Để tránh mùi và côn trùng.</li>
      </ul>
      <h4>Nơi Bỏ Rác:</h4>
      <ul>
          <li>Bỏ vào thùng rác dành cho <span class='highlight-action'>Rác Hữu Cơ</span> (thường là thùng màu <span class='highlight-action'>Xanh Lá</span>).</li>
          <li>Hoặc có thể tự <span class='highlight-action'>ủ phân compost</span> tại nhà.</li>
      </ul>
    `,
    tac_hai: `
      <h4>Tác hại (Nếu lẫn vào bãi rác):</h4>
      <ul>
          <li>❌ <span class='highlight-bad'>Gây mùi hôi thối:</span> Phân hủy trong điều kiện yếm khí (thiếu oxy) tại bãi rác.</li>
          <li>❌ <span class='highlight-bad'>Tạo ra khí Metan (CH4):</span> Một loại khí nhà kính mạnh hơn CO2 rất nhiều, góp phần làm nóng lên toàn cầu.</li>
      </ul>
      <h4>Lợi ích (Khi xử lý đúng):</h4>
      <ul>
          <li>✅ <span class='highlight-good'>Tạo ra Phân bón Compost:</span> Cung cấp dinh dưỡng cho đất, giúp cây cối tươi tốt.</li>
          <li>✅ <span class='highlight-good'>Giảm gánh nặng cho bãi rác:</span> Kéo dài tuổi thọ của các bãi chôn lấp.</li>
      </ul>
    `,
    tai_su_dung: `
      <h4>Ý tưởng Sáng tạo:</h4>
      <ul>
          <li>🌱 Tự làm phân compost để bón cho cây cảnh trong nhà hoặc vườn rau.</li>
          <li>🌱 Dùng vỏ trứng đã phơi khô, nghiền nát để bổ sung canxi cho cây.</li>
          <li>🌱 Dùng bã cà phê để khử mùi tủ lạnh hoặc bón cho cây ưa axit.</li>
      </ul>
    `
  },
  "voco": {
    summary: "Rác không thể tái chế, không phân hủy sinh học. Một số loại nguy hại. Ví dụ: <span class='highlight-bad'>Pin, bóng đèn, đồ gốm sứ vỡ, nilông bẩn.</span>",
    thu_gom: `
      <h4>Cách Thu Gom:</h4>
      <ul>
          <li>✔️ <span class='highlight-action'>Gói cẩn thận:</span> Đồ vật sắc nhọn (thủy tinh vỡ) cần được bọc trong giấy báo dày để đảm bảo an toàn.</li>
          <li>✔️ <span class='highlight-bad'>Để riêng rác nguy hại:</span> Pin, ắc quy, bóng đèn huỳnh quang, chai lọ hóa chất phải được thu gom riêng tuyệt đối.</li>
      </ul>
      <h4>Nơi Bỏ Rác:</h4>
      <ul>
          <li>Bỏ vào thùng rác <span class='highlight-action'>Thông thường/Vô cơ</span> (thường là màu <span class='highlight-action'>Xám</span>).</li>
          <li>Đối với rác nguy hại, tìm các <span class='highlight-bad'>điểm thu hồi rác thải nguy hại</span> tại địa phương.</li>
      </ul>
    `,
    tac_hai: `
      <h4>Tác hại (Nếu không xử lý):</h4>
      <ul>
          <li>❌ <span class='highlight-bad'>Ô nhiễm Đất và Nước ngầm:</span> Hóa chất độc hại từ pin, thiết bị điện tử có thể rò rỉ ra môi trường.</li>
          <li>❌ <span class='highlight-bad'>Tồn tại vĩnh viễn:</span> Các vật liệu này hầu như không phân hủy, chiếm diện tích lớn tại bãi rác.</li>
      </ul>
      <h4>Lợi ích (Khi xử lý đúng):</h4>
      <ul>
          <li>✅ <span class='highlight-good'>Ngăn chặn ô nhiễm:</span> Xử lý đúng cách rác nguy hại giúp bảo vệ sức khỏe con người và hệ sinh thái.</li>
          <li>✅ <span class='highlight-good'>An toàn cho công nhân vệ sinh:</span> Phân loại đúng giúp giảm thiểu rủi ro tai nạn cho người thu gom rác.</li>
      </ul>
    `,
    tai_su_dung: `
      <h4>Ý tưởng Sáng tạo:</h4>
      <ul>
          <li>🎨 Dùng mảnh gốm, sành sứ vỡ để trang trí chậu cây, tạo thành các bức tranh mosaic.</li>
          <li>🎨 Tận dụng quần áo cũ hỏng làm giẻ lau, thảm chùi chân.</li>
          <li>❗️ <span class='highlight-bad'>Lưu ý:</span> Hạn chế tái sử dụng rác vô cơ nếu không chắc chắn về độ an toàn. Tuyệt đối không tái sử dụng rác nguy hại.</li>
      </ul>
    `
  },
  "honhop": {
    summary: "Loại rác thải đã bị trộn lẫn hoặc khó phân loại. Ví dụ: <span class='highlight-bad'>Hộp giấy dính thức ăn, tã lót, giấy ăn đã qua sử dụng.</span>",
    thu_gom: `
      <h4>Cách Thu Gom:</h4>
      <ul>
          <li>✔️ Đây là loại rác cuối cùng sau khi bạn đã tách riêng rác tái chế và rác hữu cơ.</li>
          <li>✔️ <span class='highlight-action'>Buộc chặt trong túi:</span> Để đảm bảo vệ sinh và dễ dàng cho việc thu gom.</li>
      </ul>
      <h4>Nơi Bỏ Rác:</h4>
      <ul>
          <li>Bỏ vào thùng rác <span class='highlight-action'>Còn Lại/Hỗn hợp</span> (thường là màu <span class='highlight-action'>Xám</span> hoặc <span class='highlight-action'>Đen</span>).</li>
      </ul>
    `,
    tac_hai: `
      <h4>Tác hại (Nếu không xử lý):</h4>
      <ul>
          <li>❌ <span class='highlight-bad'>Gánh nặng lớn nhất cho bãi rác:</span> Loại rác này chiếm nhiều diện tích nhất và hầu hết sẽ được chôn lấp.</li>
          <li>❌ <span class='highlight-bad'>Gây ô nhiễm chéo:</span> Làm bẩn các loại rác có thể tái chế hoặc ủ phân, khiến toàn bộ lô rác trở nên vô giá trị.</li>
      </ul>
      <h4>Lợi ích (Khi xử lý đúng):</h4>
      <ul>
          <li>✅ <span class='highlight-good'>Mục tiêu chính là GIẢM THIỂU:</span> Việc nhận biết rác hỗn hợp giúp chúng ta ý thức hơn về việc tiêu dùng và cố gắng hạn chế tạo ra loại rác này.</li>
      </ul>
    `,
    tai_su_dung: `
      <h4>Ý tưởng Sáng tạo:</h4>
      <ul>
          <li>💡 Hầu như không có khả năng tái sử dụng.</li>
          <li>💡 Cách tốt nhất là <span class='highlight-good'>hạn chế tạo ra nó</span>: Dùng khăn vải thay giấy ăn, hạn chế đồ ăn mang đi có bao bì phức tạp, ưu tiên các sản phẩm có thể tái chế hoặc phân hủy sinh học.</li>
      </ul>
    `
  }
};
