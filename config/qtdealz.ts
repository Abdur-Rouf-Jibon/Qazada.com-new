import { ConfigsType } from "config";

const qtdealz: ConfigsType = {
  name: "Qazada",
  api: {
    baseUrl: "https://office21.dealizzle.com",
    imgUrl: "https://office21-prod.s3.me-south-1.amazonaws.com/uploads/productImages",
    reviewImgUrl: "https://office21-prod.s3.me-south-1.amazonaws.com/uploads/reviewImages",
    locationId: "615aa1a81818ec3f60583303",
    location_name: "www.qtdealz.com",
    favIconFileName: "qtdealz-icon.png",
  },
  contact: {
    whatsapp:
      "https://api.whatsapp.com/send?phone=+971528785046&text=I%20have%20a%20question%20can%20you%20assist%20me%20",
    email: "Info@Qazada.com",
    address:
      "Dee Vinci International FZE LLC . Media City. United Arab Emirates",
    phone: "+974 5030 3100",
  },
  product: {
    currency: "AED",
    // prettier-ignore
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Fujairah", "Ras Al khaimah", "Al Ain","Umm Al Quwain"],
    whatsappShare:
      "https://api.whatsapp.com/send?phone=+971528785046&text=I%20have%20a%20question%20can%20you%20assist%20me%20",
    invoiceLink: "https://office21.dealizzle.com/api/store/customer/order/pdf?order_number=",
    vat: false,
    displayYoutubeThumbnail: false,
  },
  featureFlags: {
    whatsappFab: true,
    categorySorting: false,
  },
  customer: {
    rememberContactInfo: true,
    rmContInfoAfterOrder: true,
  },
  queryKeys: {
    categories: "allCategories",
    productReviews: "product-reviews",
  },
  apiRoutes: {
    productInventoryBulkRoute: "/api/store/product/inventory/parent/query/get",
  },
  head: {
    home: {
      title: "Qazada - Online shopping in Middle East. Fashion , Apparel, Shoes, Tops,  & More . 80 % OFF. High Quality Low Prices",
      description:
        "Discount shopping in Qatar. Free shipping! Cash on Delivery! 24 hours customer service. Buy fashion clothing, women fashion, kid toys, home appliances, shoes, bags, books, etc.",
      keywords: "Qazada, Qatar online shopping, women fashion, discount, fashion, new",
      url: `${process.env.NEXT_PUBLIC_URL}`,
      imgURL: `${process.env.NEXT_PUBLIC_URL}/images/${process.env.NEXT_PUBLIC_CONFIG}-logo.png`,
    },
    newArrivalCat: {
      title: "Buy Best Women Online At Cheap Price, Women & Qatar Shopping",
      description:
        "Qazada big discount sale in Qatar, women clothes, women shoes, women fashion Qatar",
      keywords: "big discount women fashion, women clothes, online shopping Qatar",
      url: `${process.env.NEXT_PUBLIC_URL}`,
      imgURL: `${process.env.NEXT_PUBLIC_URL}/images/${process.env.NEXT_PUBLIC_CONFIG}-logo.png`,
    },
    clearanceCat: {
      title: "Big discount Qatar, women clothes Qatar, free shipping Qatar, women fashion Qatar",
      description:
        "Qazada big discount sale in Qatar, women clothes, women shoes, women fashion Qatar",
      keywords: "women shoes, women fashion, women clothes, online shopping Qatar",
      url: `${process.env.NEXT_PUBLIC_URL}`,
      imgURL: `${process.env.NEXT_PUBLIC_URL}/images/${process.env.NEXT_PUBLIC_CONFIG}-logo.png`,
    },
  },
  siteInfo: {
    certificateURL: "https://theqa.qa/certificates/details/e2090aed-f966-440f-895c-00a88c388489",
  },
};

export default qtdealz;
