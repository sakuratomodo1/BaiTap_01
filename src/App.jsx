import React from 'react';

// Phiên bản này sử dụng đối tượng 'style' nội tuyến của React,
// không yêu cầu cài đặt Tailwind CSS.

function App() {
    // Thông tin cá nhân của bạn
    const userInfo = {
        name: 'Bùi Đức Lộc',
        studentId: '22110177',
        university: 'Đại học Sư phạm Kỹ thuật TP. HCM',
        course: 'Các công nghệ phần mềm mới',
    };

    // --- Định nghĩa kiểu dáng (Styles) ---
    // Chúng ta định nghĩa các kiểu dáng ở đây để giữ cho JSX gọn gàng
    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#f3f4f6', // Tương đương 'bg-gray-100'
            fontFamily: 'sans-serif',    // Tương đương 'font-sans'
        },
        card: {
            width: '100%',
            maxWidth: '640px', // Tương đương 'max-w-xl'
            padding: '32px', // Tương đương 'p-8'
            margin: '16px', // Tương đương 'mx-4'
            backgroundColor: '#ffffff', // Tương đương 'bg-white'
            borderRadius: '8px', // Tương đương 'rounded-lg'
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)', // Tương đương 'shadow-xl'
            transition: 'transform 0.3s ease', // Hiệu ứng 'transition-all'
        },
        // Bạn có thể thêm hiệu ứng :hover bằng cách sử dụng state hoặc CSS riêng
        title: {
            fontSize: '30px', // Tương đương 'text-3xl'
            fontWeight: 'bold', // Tương đương 'font-bold'
            textAlign: 'center', // Tương đương 'text-center'
            color: '#1d4ed8', // Tương đương 'text-blue-700'
            marginBottom: '32px', // Tương đương 'mb-8'
        },
        infoContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px', // Tương đương 'space-y-5' (gap tiện lợi hơn)
        },
        infoItem: {
            // Chúng ta sẽ dùng border-bottom thay vì <hr />
            paddingBottom: '16px',
            borderBottom: '1px solid #e5e7eb', // Tương đương 'border-gray-200'
        },
        infoLabel: {
            display: 'block', // Giúp label và value xuống dòng
            fontWeight: '600', // Tương đương 'font-semibold'
            color: '#374151', // Tương đương 'text-gray-700'
            marginBottom: '4px', // Tương đương 'mb-1'
        },
        infoValue: {
            color: '#111827', // Tương đương 'text-gray-900'
            fontSize: '18px', // Tương đương 'text-lg'
            fontWeight: '500', // Tương đương 'font-medium'
        }
    };
    // --- Kết thúc định nghĩa kiểu dáng ---

    return (
        // Sử dụng thuộc tính 'style' để áp dụng các kiểu dáng
        <div style={styles.container}>
            {/* Chúng ta không thể thêm :hover trực tiếp vào 'style'.
        Bạn có thể làm điều đó bằng cách thêm một file CSS riêng
        hoặc dùng state onMouseEnter/onMouseLeave để thay đổi style.
        Ở đây tôi để đơn giản.
      */}
            <div style={styles.card}>

                {/* Tiêu đề */}
                <h1 style={styles.title}>
                    Thông Tin Sinh Viên
                </h1>

                {/* Phần thông tin */}
                <div style={styles.infoContainer}>

                    {/* Mục thông tin 1 */}
                    <div style={styles.infoItem}>
            <span style={styles.infoLabel}>
              Họ và tên:
            </span>
                        <span style={styles.infoValue}>
              {userInfo.name}
            </span>
                    </div>

                    {/* Mục thông tin 2 */}
                    <div style={styles.infoItem}>
            <span style={styles.infoLabel}>
              MSSV:
            </span>
                        <span style={styles.infoValue}>
              {userInfo.studentId}
            </span>
                    </div>

                    {/* Mục thông tin 3 */}
                    <div style={styles.infoItem}>
            <span style={styles.infoLabel}>
              Trường:
            </span>
                        <span style={styles.infoValue}>
              {userInfo.university}
            </span>
                    </div>

                    {/* Mục thông tin 4 - không có gạch chân ở dưới */}
                    <div>
            <span style={styles.infoLabel}>
              Môn học:
            </span>
                        <span style={styles.infoValue}>
              {userInfo.course}
            </span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;