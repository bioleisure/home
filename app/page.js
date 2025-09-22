'use client';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

export default function Home() {
  // 语言状态
  const [lang, setLang] = useState('zh');
  // tab 状态
  const [tab, setTab] = useState('tab1');

  // 语言持久化
  useEffect(() => {
    const savedLang = typeof window !== 'undefined' && localStorage.getItem('bioleisure-language');
    if (savedLang) setLang(savedLang);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('bioleisure-language', lang);
    }
  }, [lang]);

  return (
    <div className={classNames('bioleisure-container', `lang-mode-${lang}`)}>
      {/* Hero Section */}
      <section className="bio-hero">
        {/* 语言切换器 */}
        <div className="lang-switcher">
          <button
            className={classNames('lang-switch-btn', { active: lang === 'zh' })}
            onClick={() => setLang('zh')}
            data-lang="zh"
          >
            中
          </button>
          <button
            className={classNames('lang-switch-btn', { active: lang === 'en' })}
            onClick={() => setLang('en')}
            data-lang="en"
          >
            EN
          </button>
        </div>

        <video
          className="bio-hero-video-bg"
          autoPlay
          muted
          loop
          playsInline
          poster="https://via.placeholder.com/1920x1080/1a1a1a/ffffff?text=Loading+Video..."
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-flying-through-a-virtual-world-of-glowing-plexus-41904-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="bio-hero-overlay"></div>
        <div className="bio-hero-content">
          <h1>
            <span className="lang-zh">让每一个地方，都成为一个值得探索的故事。</span>
            <span className="lang-en">Let every place become a story worth exploring.</span>
          </h1>
          <p>
            <span className="lang-zh">
              我们通过开创性的Web AR与AI叙事引擎，将您的物理空间（博物馆、商场、城市地标）转化为充满情感连接和商业活力的沉浸式冒险。
            </span>
            <span className="lang-en">
              We transform your physical spaces (museums, malls, landmarks) into immersive adventures full of emotional connection and commercial vitality, using our pioneering Web AR and AI Narrative Engine.
            </span>
          </p>
          <a
            href="https://qrch.pro/ss6qv086fa8m"
            className="bio-hero-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="lang-zh">预约一次演示</span>
            <span className="lang-en">Book a Demo</span>
          </a>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bio-use-cases">
        <h2 className="bio-use-cases-title">
          <span className="lang-zh">为您的行业，量身定制</span>
          <span className="lang-en">Tailored For Your Industry</span>
        </h2>
        <div className="tabs-container">
          <nav className="tabs-nav">
            <div
              className={classNames('tab-nav-item', { active: tab === 'tab1' })}
              data-tab="tab1"
              onClick={() => setTab('tab1')}
            >
              <span className="lang-zh">文化与旅游地标</span>
              <span className="lang-en">Cultural & Tourism Landmarks</span>
            </div>
            <div
              className={classNames('tab-nav-item', { active: tab === 'tab2' })}
              data-tab="tab2"
              onClick={() => setTab('tab2')}
            >
              <span className="lang-zh">商业综合体与品牌</span>
              <span className="lang-en">Commercial Complexes & Brands</span>
            </div>
            <div
              className={classNames('tab-nav-item', { active: tab === 'tab3' })}
              data-tab="tab3"
              onClick={() => setTab('tab3')}
            >
              <span className="lang-zh">未来拓展</span>
              <span className="lang-en">Future Verticals</span>
            </div>
          </nav>
          {/* Tab 1 */}
          <div id="tab1" className={classNames('tab-content', { active: tab === 'tab1' })}>
            <div className="tab-content-inner">
              <img
                src="/image1.jpg"
                alt="Cultural & Tourism Landmarks"
              />
              <div className="tab-content-text">
                <h3>
                  <span className="lang-zh">活化历史，重塑文化体验</span>
                  <span className="lang-en">Revitalize History, Reshape Cultural Experience</span>
                </h3>
                <p>
                  <strong>
                    <span className="lang-zh">适用对象:</span>
                    <span className="lang-en">For:</span>
                  </strong>
                  <span className="lang-zh"> 博物馆、历史街区、主题公园</span>
                  <span className="lang-en"> Museums, Historic Districts, Theme Parks</span>
                </p>
                <p>
                  <span className="lang-zh">
                    通过我们的动态叙事引擎，将历史“活化”，让游客与文物互动寻宝。我们将“一次性”的参观，升级为可分享、可重玩的深度文化体验。
                  </span>
                  <span className="lang-en">
                    Our dynamic narrative engine brings history to life, allowing visitors to interact with relics and characters. We upgrade a one-time visit into a shareable, replayable, and deep cultural experience.
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Tab 2 */}
          <div id="tab2" className={classNames('tab-content', { active: tab === 'tab2' })}>
            <div className="tab-content-inner">
              <img
                src="/image2.jpg"
                alt="Commercial Complexes & Brands"
              />
              <div className="tab-content-text">
                <h3>
                  <span className="lang-zh">创造话题，驱动线下增长</span>
                  <span className="lang-en">Create Buzz, Drive Offline Growth</span>
                </h3>
                <p>
                  <strong>
                    <span className="lang-zh">适用对象:</span>
                    <span className="lang-en">For:</span>
                  </strong>
                  <span className="lang-zh"> 购物中心、品牌旗舰店、生活方式地标</span>
                  <span className="lang-en"> Shopping Malls, Flagship Stores, Lifestyle Hubs</span>
                </p>
                <p>
                  <span className="lang-zh">
                    为商场打造独家的大型实景解谜游戏，将商户串联成任务点。通过我们的情境化O2O引擎，直接拉动客流和销售额，并利用社交裂变功能引爆话题。
                  </span>
                  <span className="lang-en">
                    Create exclusive LARP games for your mall, linking tenants as mission points. Our contextual O2O engine directly boosts foot traffic and sales, while igniting social media buzz.
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Tab 3 */}
          <div id="tab3" className={classNames('tab-content', { active: tab === 'tab3' })}>
            <div className="tab-content-inner">
              <img
                src="/image3.jpg"
                alt="Future Verticals"
              />
              <div className="tab-content-text">
                <h3>
                  <span className="lang-zh">赋能更多空间</span>
                  <span className="lang-en">Empowering More Spaces</span>
                </h3>
                <p>
                  <strong>
                    <span className="lang-zh">适用对象:</span>
                    <span className="lang-en">For:</span>
                  </strong>
                  <span className="lang-zh"> 教育、会展、地产</span>
                  <span className="lang-en"> Education, Exhibitions, Real Estate</span>
                </p>
                <p>
                  <span className="lang-zh">
                    我们的技术具备高度可扩展性，可应用于互动校园导览、沉浸式展会体验、创新看房模式等多个垂直领域，为各类物理空间创造全新价值。
                  </span>
                  <span className="lang-en">
                    Our technology is highly scalable and can be applied to various verticals like interactive campus tours, immersive exhibition experiences, and innovative property viewings.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bio-footer">
        <div className="footer-container">
          <div className="footer-column">
            <h4>
              <span className="lang-zh">关于我们</span>
              <span className="lang-en">About Us</span>
            </h4>
            <ul>
              <li>
                <a href="#">
                  <span className="lang-zh">公司简介</span>
                  <span className="lang-en">Company</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="lang-zh">联系我们</span>
                  <span className="lang-en">Contact</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="lang-zh">加入我们</span>
                  <span className="lang-en">Careers</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>
              <span className="lang-zh">产品</span>
              <span className="lang-en">Products</span>
            </h4>
            <ul>
              <li>
                <a href="#">
                  <span className="lang-zh">Web AR 引擎</span>
                  <span className="lang-en">Web AR Engine</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="lang-zh">AI 叙事引擎</span>
                  <span className="lang-en">AI Narrative Engine</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="lang-zh">O2O 解决方案</span>
                  <span className="lang-en">O2O Solutions</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>
              <span className="lang-zh">法律</span>
              <span className="lang-en">Legal</span>
            </h4>
            <ul>
              <li>
                <a href="#">
                  <span className="lang-zh">隐私政策</span>
                  <span className="lang-en">Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="lang-zh">服务条款</span>
                  <span className="lang-en">Terms of Service</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 BioLeisure. All Rights Reserved.</p>
        </div>
      </footer>

      {/* 全局样式写在全局css即可 */}
    </div>
  );
}