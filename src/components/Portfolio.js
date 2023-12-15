import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>My Recent Works</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item, index)=>{
              return(
                <div className="columns portfolio-item" key={index}>
                  <div className="item-wrap">
                    <a href={item.url} target='_blank'>
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{item.name}</h3>
                          <p style={{fontSize: '13px', fontFamily:'sans-serif '}}>{item.stack}</p>
                          <hr></hr>
                          <p style={{fontSize: '15px', fontFamily:'sans-serif '}}>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}