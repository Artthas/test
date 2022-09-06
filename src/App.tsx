import React from 'react';
import './App.scss';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <header className="header">
        <input type="checkbox" name="nav_toggle" id="burger"/>
        <label className="header_burger" htmlFor="burger"></label>
        <nav className="header_nav">
          <ul className="header_nav_list">
            <li className="header_nav_list_item">Text</li>
            <li className="header_nav_list_item">Text</li>
            <li className="header_nav_list_item">Text</li>
            <li className="header_nav_list_item">Text</li>
            <li className="header_nav_list_item">
              <a className="main_btn" href="#popup">Open pop-up button</a>
            </li>
          </ul>
        </nav>
        <div className="header_div">
          <ul className="header_div_list">
            <li className="header_div_list_item">Text</li>
            <li className="header_div_list_item">Text</li>
            <li className="header_div_list_item">Text</li>
          </ul>
        </div>
      </header>
      <main className="main">
        <div className="main_first-section_wrapper">
          <input type="radio" id="btn-to-1" name="toggle"/>
          <input type="radio" id="btn-to-2" name="toggle"/>
          <input type="radio" id="btn-to-3" name="toggle"/>
          <section className="main_first-section">
            <div className="main_first-section_item">
              <label htmlFor="btn-to-3"></label>
              <p>H1 text1</p>
              <div className="btn_wrapper">
                <a href="#popup">Open pop-up button</a>
              </div>
              <label htmlFor="btn-to-2"></label>
            </div>
            <div className="main_first-section_item">
              <label htmlFor="btn-to-1"></label>
              <p>H1 text2</p>
              <div className="btn_wrapper">
                <a href="#popup">Open pop-up button</a>
              </div>
              <label htmlFor="btn-to-3"></label>
            </div>
            <div className="main_first-section_item">
              <label htmlFor="btn-to-2"></label>
              <p>H1 text3</p>
              <div className="btn_wrapper">
                <a href="#popup">Open pop-up button</a>
              </div>
              <label htmlFor="btn-to-1"></label>
            </div>
          </section>
        </div>
        <h2>H2 text</h2>
        <section className="main_second-section">
          <div className="main_second-section_item">1</div>
          <div className="main_second-section_item">2</div>
          <div className="main_second-section_item">3</div>
          <div className="main_second-section_item">4</div>
        </section>
        <h2>H2 text</h2>
        <section className="main_third-section">
          <div className="main_third-section_item"></div>
          <div className="main_third-section_item"></div>
          <div className="main_third-section_item"></div>
          <div className="main_third-section_item"></div>
          <div className="main_third-section_item"></div>
        </section>
        <p className="main_text">Text utp</p>
        <a className="main_btn" href="#popup">Open pop-up button</a>
      </main>
      <footer className="footer">
        <ul className="footer_list">
          <li className="footer_list_item">Text</li>
          <li className="footer_list_item">Text</li>
          <li className="footer_list_item">Text</li>
          <li className="footer_list_item">Text</li>
        </ul>
      </footer>
      <div id="popup" className="overlay">
	      <div className="popup">
		      <h2>Pop-up</h2>
		      <a className="popup_close" href="#">&times;</a>
	      </div>
      </div>
    </React.Fragment>
  );
}

export default App;
