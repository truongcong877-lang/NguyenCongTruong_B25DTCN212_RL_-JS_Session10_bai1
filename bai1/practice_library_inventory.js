const books = [
  {
    bookCode: "B01",
    title: "Lập trình JavaScript",
    category: "Công nghệ thông tin",
    price: 150000,
    totalCopies: 10,
    availableCopies: 3,
    shelfLocation: "A01"
  },
  {
    bookCode: "B02",
    title: "Cơ sở dữ liệu MySQL",
    category: "Công nghệ thông tin",
    price: 180000,
    totalCopies: 8,
    availableCopies: 5,
    shelfLocation: "A02"
  },
  {
    bookCode: "B03",
    title: "Đắc nhân tâm",
    category: "Kỹ năng sống",
    price: 90000,
    totalCopies: 12,
    availableCopies: 0,
    shelfLocation: "B01"
  }
];

const printInventory = () => {
  console.log("==============================================================");
  console.log("              BÁO CÁO KIỂM KÊ KHO THƯ VIỆN");
  console.log("==============================================================");
  console.log(
    "Mã sách".padEnd(10) +
    "Tên sách".padEnd(28) +
    "Tổng SL".padEnd(10) +
    "Còn trên kệ".padEnd(15) +
    "Vị trí kệ".padEnd(12) +
    "Trạng thái"
  );
  console.log("--------------------------------------------------------------");

  for (let i = 0; i < books.length; i++) {
    let bookStatus = "CÒN SÁCH";

    if (books[i].availableCopies === 0) {
      bookStatus = "HẾT SÁCH TRÊN KỆ";
    }

    console.log(
      books[i].bookCode.padEnd(10) +
      books[i].title.padEnd(28) +
      String(books[i].totalCopies).padEnd(10) +
      String(books[i].availableCopies).padEnd(15) +
      books[i].shelfLocation.padEnd(12) +
      bookStatus
    );
  }

  console.log("==============================================================");
};

console.log("BƯỚC 1: KHO SÁCH BAN ĐẦU");
printInventory();

const newBook = {
  bookCode: "B04",
  title: "Python cơ bản",
  category: "Công nghệ thông tin",
  price: 200000,
  totalCopies: 15,
  availableCopies: 15,
  shelfLocation: "C01"
};

books.push(newBook);

console.log("BƯỚC 2: SAU KHI NHẬP KHO B04");
printInventory();

console.log("BƯỚC 3: XỬ LÝ MƯỢN SÁCH B01");

let borrowedBook = false;

for (let i = 0; i < books.length; i++) {
  if (books[i].bookCode === "B01") {
    if (books[i].availableCopies > 0) {
      books[i].availableCopies--;
      borrowedBook = true;
      console.log("Mượn sách thành công:", books[i].title);

      if (books[i].availableCopies === 0) {
        console.log("Trạng thái: HẾT SÁCH TRÊN KỆ");
      }
    } else {
      console.log("Không thể mượn: Sách đã hết trên kệ.");
    }

    break;
  }
}

if (!borrowedBook) {
  console.log("Không tìm thấy mã sách B01.");
}

printInventory();

console.log("BƯỚC 4: THANH LÝ SÁCH B03");

let deletedBook = false;

for (let i = 0; i < books.length; i++) {
  if (books[i].bookCode === "B03") {
    console.log("Đã thanh lý:", books[i].title);
    books.splice(i, 1);
    deletedBook = true;
    break;
  }
}

if (!deletedBook) {
  console.log("Không tìm thấy sách cần thanh lý.");
}

printInventory();

console.log("BƯỚC 5: THỐNG KÊ TÀI SẢN KHO");

let totalBookCopies = 0;
let totalAvailableCopies = 0;
let totalInventoryValue = 0;

for (let i = 0; i < books.length; i++) {
  totalBookCopies += books[i].totalCopies;
  totalAvailableCopies += books[i].availableCopies;
  totalInventoryValue += books[i].totalCopies * books[i].price;
}

console.log("==============================================================");
console.log("                 TỔNG KẾT TÀI SẢN KHO");
console.log("==============================================================");
console.log("Số đầu sách hiện có:", books.length);
console.log("Tổng số lượng sách:", totalBookCopies, "cuốn");
console.log("Số sách còn trên kệ:", totalAvailableCopies, "cuốn");
console.log(
  "Tổng giá trị tài sản:",
  totalInventoryValue.toLocaleString("vi-VN"),
  "VNĐ"
);
console.log("==============================================================");