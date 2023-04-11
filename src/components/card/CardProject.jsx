import React from "react";

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
        <div class="product_info d-flex flex-row align-items-start justify-content-start">
          <div>
            <div>
              <div class="product_name">
                <a target="_blank" href={item.link}>
                  {item.name}
                </a>
              </div>
              <div class="product_category">{item.technology}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
