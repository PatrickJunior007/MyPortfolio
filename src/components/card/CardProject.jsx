import React from "react";

const CardProject = ({item}) => {
  return (
    <div class="col-lg-4 item html" key={item.id}>
      <div class="card">
        <a style={{textDecoration: "none"}} href={item.link}>
          <div class="card-head">
            <img
              src={item.image}
              alt=""
              class="img-fluid card-img"
            />
          </div>
          <div class="product_info d-flex flex-row align-items-start justify-content-start">
            <div>
              <div>
                <div class="product_name">
                  <a href="review11.php">{item.name}</a>
                </div>
                <div class="product_category">{item.technology}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CardProject;
