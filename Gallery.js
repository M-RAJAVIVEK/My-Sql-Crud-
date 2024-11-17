import React from 'react';
import  a1  from './images/a1.jpeg';
import  b1  from './images/b1.jpeg';
import  b2  from './images/b2.jpeg';
import  b3  from './images/b3.jpeg';
import  b4 from './images/b4.jpeg';
import  b5  from './images/b5.jpeg';
import  b6 from './images/b6.jpeg';
import  b7  from './images/b7.jpeg';
import  b8  from './images/b8.jpeg';
import  b9  from './images/b9.jpeg';

const Gallery = () => {
  // Assuming images are in the 'public/images' folder
  // const b1 = './images/b1.jpeg';
  // const b2 = './images/b2.jpeg';
  // const b3 = './images/b3.jpeg';
  // const b4 = './images/b4.jpeg';
  // const b5 = './images/b5.jpeg';
  // const b6 = './images/b6.jpeg';
  // const b7 = './images/b7.jpeg';
  // const b8 = './images/b8.jpeg';



 

  return (
    <div className="container text-center">
      {/* Card Group 1 */}
      <div className="card-group">
        <div className="card">
          <img src={b1} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <div>
              <button type="button" className="btn btn-primary">
                BUY
              </button>{' '}
              <button type="button" className="btn btn-secondary">
                ADD CARDS
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={b2} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content. This card has even longer content than the
              first to show that equal height action.
            </p>
            <div>
              <button type="button" className="btn btn-primary">
                BUY
              </button>{' '}
              <button type="button" className="btn btn-secondary">
                ADD CARDS
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={b3} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <div>
              <button type="button" className="btn btn-primary">
                BUY
              </button>{' '}
              <button type="button" className="btn btn-secondary">
                ADD CARDS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Group 2 */}
      <div className="card-group">
        <div className="card">
          <img src={b4} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <div>
              <button type="button" className="btn btn-primary">
                BUY
              </button>{' '}
              <button type="button" className="btn btn-secondary">
                ADD CARDS
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={b5} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content. This card has even longer content than the
              first to show that equal height action.
            </p>
            <div>
              <button type="button" className="btn btn-primary">
                BUY
              </button>{' '}
              <button type="button" className="btn btn-secondary">
                ADD CARDS
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={b6} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card. Available in 4 flavors - Hazelnut,
              Caramel, Cocoa Mint, and Original. 100% Pure Coffee.Now make super 
              smooth coffee at home
              without a machine. Available in 4 flavors - Hazelnut, Caramel,
              Cocoa Mint, and Original. 100% Pure Coffee.
              This is a wider card.
            </p>
            <div>
              <button type="button" className="btn btn-primary">
                BUY
              </button>{' '}
              <button type="button" className="btn btn-secondary">
                ADD CARDS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Group 3 */}
      <div className="card-group">
        <div className="card">
          <img src={b7} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. Available in 4 flavors - Hazelnut,
              Caramel, Cocoa Mint, and Original. 100% Pure Coffee. 
            </p>
            <div>
              <button type="button" className="btn btn-primary">
                BUY
              </button>{' '}
              <button type="button" className="btn btn-secondary">
                ADD CARDS
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={b8} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This cleaning and housekeeping service is available for both
              companies and households. Available in 4 flavors - Hazelnut,
              Caramel, Cocoa Mint, and Original. 100% Pure Coffee.Available in 4 flavors - Hazelnut,
              Caramel, Cocoa Mint, and Original. 100% Pure Coffee.Now make super 
              smooth coffee at home
              without a machine. 
            </p>
            <div>
              <button type="button" className="btn btn-primary">
                BUY
              </button>{' '}
              <button type="button" className="btn btn-secondary">
                ADD CARDS
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={b5} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Tea is an aromatic beverage prepared by pouring hot or boiling
              water over cured or fresh leaves of Camellia sinensis.
              Available in 4 flavors - Hazelnut, Caramel,
              Cocoa Mint, and Original. 100% Pure Coffee.
              The wider card.
            </p>
            <div>
              <button type="button" className="btn btn-primary">
                BUY
              </button>{' '}
              <button type="button" className="btn btn-secondary">
                ADD CARDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
