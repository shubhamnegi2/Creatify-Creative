import React from "react";

export default function FirstCommonSection(props) {
  const { h1, h2, p, img } = props.data;
  return (
    <>
      <section class="home">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-10">
              <div class="heading text-center">
                <h1>{h1}</h1>
                <h2>{h2}</h2>

                <div class="row justify-content-center mt-4 mb-4">
                  {img.map((elem, i) => (
                    <div class="col-lg-2 text-center" key={i}>
                      <div class="images">
                        <img src={elem} alt={h1} />
                      </div>
                    </div>
                  ))}
                </div>
                <p>{p}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
