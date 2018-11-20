import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

export default function Banner() {
  return (
    <section class="slider home-banner d-flex align-items-center">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-md-12">
                    <div class="slider-title_box">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="slider-content_wrap">
                                    <h1 class="title-banner">Tìm hiểu thực tế các chuyến đi</h1>
                                    <h5>Tại 63 tỉnh thành trên cả nước</h5>
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-10">
                                <form class="form-wrap mt-4">
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <input type="text" placeholder="Bạn muốn đi đâu?" class="btn-group1"/>
                                        <select class="btn-group2 select-location-banner">
											<option value=''>Tất cả</option>
											<option value="hcm">Hồ Chí Minh</option>
											<option value="hn">Hà Nội</option>
											<option value="dn">Đà Nẵng</option>
										</select>
                                        <button type="submit" class="btn-form"><span class="icon-magnifier search-icon"></span>SEARCH<i class="pe-7s-angle-right"></i></button>
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