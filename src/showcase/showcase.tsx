import NavigationBar from "../component/NavigationBar";
import ProductCard from "./ProductCard";
import "./showcase.css";

const ProductsPage = () => {
  const cardsData = [
    {
      id: "product-card-root-class-name" + 1,
      companyName: "24m",
      imageSrc: "https://24-m.com/wp-content/themes/blankslate/images/logo.png",
    },
    {
      id: "product-card-root-class-name" + 2,
      companyName: "A123 Systems",
      imageSrc:
        "https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/modified/6cf5ffc3-bd78-4c21-a6b5-687ddf19d75e.png",
    },
    {
      id: "product-card-root-class-name" + 3,
      companyName: "Automative Cells Company (ACC)",
      imageSrc:
        "https://batteryindustry.tech/wp-content/uploads/2024/02/Yzk0YTUxODQtOWI4NS00OWEzLWJhMDgtM2M0ZGI1MGMwMmY3.png",
    },

    {
      id: "product-card-root-class-name" + 5,
      companyName: "Altairnano",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/AltairNano_Logo.svg/2560px-AltairNano_Logo.svg.png",
    },
    {
      id: "product-card-root-class-name" + 6,
      companyName: "American Battery Factory",
      imageSrc:
        "https://suncorridorinc.com/wp-content/uploads/2022/12/ABF-Logo-300x166.png",
    },
    {
      id: "product-card-root-class-name" + 7,
      companyName: "Amprius",
      imageSrc:
        "https://amprius.com/wp-content/uploads/2022/04/amprius-logo.png",
    },
    {
      id: "product-card-root-class-name" + 8,
      companyName: "AMTE Power",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2FbatteryCompanies%2Famte%20power.png?alt=media&token=8c77c04a-8312-4500-a192-91ca8479741a",
    },
    {
      id: "product-card-root-class-name" + 9,
      companyName: "Aspilsan Energy",
      imageSrc:
        "https://www.aspilsan.com/wp-content/uploads/2022/03/Aspilsan-Logo.png",
    },
    {
      id: "product-card-root-class-name" + 10,
      companyName: "ATL",
      imageSrc:
        "https://batteryindustry.tech/wp-content/uploads/2020/08/Amperex-Technology-Limited-ATL.png",
    },
    {
      id: "product-card-root-class-name" + 11,
      companyName: "ATLIS",
      imageSrc:
        "https://www.charin.global/media/pages/news/atlis-motor-vehicles-becomes-a-core-member-of-charin/4bdaf352b0-1656410354/amv-black-on-white-01-1280x-q95.png",
    },
    {
      id: "product-card-root-class-name" + 12,
      companyName: "BAK Energy",
      imageSrc:
        "https://www.misteliquid.co.uk/image/cachewebp/catalog/Brand%20Logos/Bak_Logo-285x285.webp",
    },
    {
      id: "product-card-root-class-name" + 13,
      companyName: "BasqueVolt",
      imageSrc:
        "https://elreferente.es/wp-content/uploads/2022/11/BASQUEVOLT.jpg",
    },
    {
      id: "product-card-root-class-name" + 14,
      companyName: "Beyonder",
      imageSrc:
        "https://images.squarespace-cdn.com/content/v1/5e1710c4ee00a9442be84bbb/1584975746752-4DVMXHO3WPA821TMAXTU/beyonder+logo-blå.png",
    },
    {
      id: "product-card-root-class-name" + 15,
      companyName: "Blue Solutions",
      imageSrc:
        "https://www.blue-solutions.com/app/assets-bluesolutions/uploads/2021/03/logo-1.png",
    },
    {
      id: "product-card-root-class-name" + 16,
      companyName: "BST Power",
      imageSrc:
        "https://iconape.com/wp-content/png_logo_vector/best-power-1.png",
    },
    {
      id: "product-card-root-class-name" + 17,
      companyName: "BYD",
      imageSrc:
        "https://www.starbil.no/wp-content/uploads/2017/08/BYD-logo-rod-jpg16-e1651835979782.png",
    },
  ];

  const cardsVehicleTypeData = [
    {
      id: "product-card-root-class-name" + 1,
      companyName: "2 Wheeler",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2FtypeofVehile%2Fmotocross-concept-illustration_114360-3541.jpg?alt=media&token=6008a461-6d09-497d-bc2c-ac373d26f032",
    },
    {
      id: "product-card-root-class-name" + 2,
      companyName: "3 Wheeler",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2FtypeofVehile%2F3wheeler.png?alt=media&token=1e24f155-02af-45ae-b3cf-f5839cbd3484",
    },
    {
      id: "product-card-root-class-name" + 3,
      companyName: "Passenger Car",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2FtypeofVehile%2F3162821%20copy.jpg?alt=media&token=f2c3949d-dd89-493b-8d9c-724aae56ee92",
    },

    {
      id: "product-card-root-class-name" + 5,
      companyName: "Industrial",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2FtypeofVehile%2Fimgonline-com-ua-ReplaceColor-x6lzdzmrFXmRPTs.jpg?alt=media&token=7446a7da-c461-4ac2-b8bf-c16f898f47da",
    },

    {
      id: "product-card-root-class-name" + 5,
      companyName: "Drone",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2FtypeofVehile%2Fdrone-concept-illustration_114360-11010.jpg?alt=media&token=ddb05889-7d52-4169-b0ba-29321e434be5",
    },
    {
      id: "product-card-root-class-name" + 5,
      companyName: "Stationary",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2FtypeofVehile%2Fimgonline-com-ua-ReplaceColor-R2WSss48YVqqF8A.jpg?alt=media&token=29dc2be9-d0d4-4154-9cd4-c3103ff7125a",
    },
  ];

  return (
    <div className="products-page-container">
      <div className="products-page-container1">
        <div className="products-page-testimonial">
          <div className="products-page-container2">
            <div className="products-page-container3">
              <NavigationBar />
              <h1 className="products-page-text">
                <span>Our Research</span>
                <br></br>
              </h1>
              <span className="products-page-text3">
                Discover our extensive expertise across a range of battery
                types, compositions, and applications. We&apos;ve collaborated
                on numerous unique variations to cater to your specific needs.
              </span>
              <div className="products-page-container4">
                {cardsData.map((card) => (
                  <ProductCard
                    rootClassName={card.id}
                    imgLink={card.imageSrc}
                    nameOfCompany={card.companyName}
                  />
                ))}
              </div>
            </div>

            <div className="products-page-container3">
              <h1 className="products-page-text">
                <span>Our Vehicle research types</span>
                <br></br>
              </h1>
              <span className="products-page-text3">
                Discover our extensive expertise across a range of battery
                types, compositions, and applications. We&apos;ve collaborated
                on numerous unique variations to cater to your specific needs.
              </span>
              <div className="products-page-container4">
                {cardsVehicleTypeData.map((card) => (
                  <ProductCard
                    rootClassName={card.id}
                    imgLink={card.imageSrc}
                    nameOfCompany={card.companyName}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
