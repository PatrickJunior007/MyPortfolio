import { FaExternalLinkAlt } from "react-icons/fa";

const CardProject = ({ item }) => {
  return (
    <div class="col-lg-4 item html" key={item.id}>
      <div class="card">
        <a
          style={{ textDecoration: "none" }}
          href={item.image}
          class="glightbox"
          data-gallery="gallery1"
        >
          <div class="card-head">
            <img
              src={item.image}
              alt="patrick junior - img"
              class="img-fluid card-img"
            />
          </div>
        </a>
        <div class="product_info  flex-row align-items-start justify-content-start">
          <div>
            <div>
              <div className="d-flex  flex-row justify-content-between align-items-center">
                <div class="product_name">
                  <a target="_blank" href={item.link} rel="noreferrer">
                    {item.name}
                  </a>
                </div>
                <a target="_blank" href={item.link} rel="noreferrer">
                  <FaExternalLinkAlt className="clickIcon" size={16} />
                </a>
              </div>

              <div class="product_category mt-1">{item.technology}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
