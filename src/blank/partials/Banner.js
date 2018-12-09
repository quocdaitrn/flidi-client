import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

export default function Banner() {
  return (
    <section className="slider home-banner d-flex align-items-center">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="slider-title_box">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="slider-content_wrap">
                                    <h1 className="title-banner">Tìm hiểu thực tế các chuyến đi</h1>
                                    <h5>Tại 63 tỉnh thành trên cả nước</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-10">
                                <form className="form-wrap mt-4" action="/maps">
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <input type="text" placeholder="Bạn muốn đi đâu?" className="btn-group1"/>
                                        <select className="btn-group2 select-location-banner">
											<option value=''>Tất cả</option>
											<option value="hcm">Hồ Chí Minh</option>
											<option value="hn">Hà Nội</option>
											<option value="dn">Đà Nẵng</option>
										</select>
                                        <button type="submit" className="btn-form"><span className="icon-magnifier search-icon"></span>SEARCH<i className="pe-7s-angle-right"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}