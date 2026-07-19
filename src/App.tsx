import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowDown, ArrowRight, BarChart3, BriefcaseBusiness, Check, ChevronLeft, ChevronRight,
  Download, ExternalLink, FileText, FolderKanban, GraduationCap, Heart, LineChart,
  Menu, ShieldCheck, Sparkles, Target, Users, X
} from 'lucide-react';
import { assignments, skills } from './data';
import type { Assignment } from './types';

type Tab = 'home' | 'assignments' | 'summary';

const tabFromHash = (): Tab => {
  const hash = window.location.hash.replace('#', '');
  return hash === 'assignments' || hash === 'summary' ? hash : 'home';
};

const pageTransition = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: .55, ease: [0.22, 1, 0.36, 1] as const } },
  exit: { opacity: 0, y: -14, transition: { duration: .2 } }
};

export default function App() {
  const [tab, setTab] = useState<Tab>(tabFromHash);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<Assignment | null>(null);
  const [skillIndex, setSkillIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [tab]);
  useEffect(() => {
    const syncTab = () => setTab(tabFromHash());
    window.addEventListener('hashchange', syncTab);
    return () => window.removeEventListener('hashchange', syncTab);
  }, []);
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    if (selected) requestAnimationFrame(() => closeRef.current?.focus());
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', close);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', close); };
  }, [selected]);

  const navigate = (next: Tab) => {
    window.location.hash = next === 'home' ? '' : next;
    setTab(next);
    setMenuOpen(false);
  };
  const moveAssignment = (step: number) => {
    if (!selected) return;
    const index = assignments.findIndex((item) => item.id === selected.id);
    setSelected(assignments[(index + step + assignments.length) % assignments.length]);
  };

  return (
    <div className="app-shell">
      <a href="#content" className="skip-link">Đi đến nội dung</a>
      <img className="school-logo" src="/ueb-logo.jpg" alt="Logo Trường Đại học Kinh tế - ĐHQGHN" />
      <header className="topbar">
        <button className="brand" onClick={() => navigate('home')} aria-label="Về trang chủ">
          <span className="brand-monogram">Q.</span><span><strong>QUYÊN</strong><small>BUSINESS PORTFOLIO</small></span>
        </button>
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {([['home', 'Trang chủ'], ['assignments', 'Bài tập'], ['summary', 'Tổng kết']] as [Tab, string][]).map(([value, label], index) => (
            <button key={value} onClick={() => navigate(value)} className={tab === value ? 'active' : ''}><span>0{index + 1}</span>{label}</button>
          ))}
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Mở menu">{menuOpen ? <X /> : <Menu />}</button>
        <AnimatePresence>{menuOpen && <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}><button onClick={() => navigate('home')}>Trang chủ</button><button onClick={() => navigate('assignments')}>Bài tập</button><button onClick={() => navigate('summary')}>Tổng kết</button></motion.nav>}</AnimatePresence>
      </header>

      <main id="content">
        <AnimatePresence mode="wait">
          {tab === 'home' && (
            <motion.div key="home" {...pageTransition}>
              <section className="business-hero">
                <div className="hero-grid-lines" aria-hidden="true" />
                <div className="hero-stickers" aria-hidden="true">
                  {Array.from({ length: 10 }, (_, index) => <i key={index} className={`hero-sticker sticker-${index + 1}`} />)}
                </div>
                <div className="hero-copy">
                  <div className="edition-line"><span>UEB · VNU 2026</span><span>PORTFOLIO No.01</span></div>
                  <span className="hero-label">Quản trị kinh doanh · Business Administration</span>
                  <h1><span>Nguyễn</span><span>Tương</span><em>Thị Quyên</em></h1>
                  <p>Portfolio ghi lại cách mình tiếp cận công nghệ như một nhà quản trị: bắt đầu từ dữ liệu, tổ chức quy trình, phối hợp con người và đưa ra quyết định có trách nhiệm.</p>
                  <div className="identity-row"><span>MSSV 25051687</span><span>Đại học Kinh tế – ĐHQGHN</span><span>VNU1001_E252042</span></div>
                  <div className="hero-actions"><button className="button primary" onClick={() => navigate('assignments')}>Khám phá 6 bài tập <ArrowRight /></button><button className="button line" onClick={() => navigate('summary')}>Xem báo cáo tổng kết</button></div>
                  <div className="hero-metrics"><div><strong>06</strong><span>Dự án học tập</span></div><div><strong>50</strong><span>Trang báo cáo</span></div><div><strong>06</strong><span>Năng lực cốt lõi</span></div></div>
                </div>

                <motion.div className="hero-visual" initial={{ opacity: 0, x: 65 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8 }}>
                  <div className="portrait-frame"><img src="/avatar.png" alt="Nguyễn Tương Thị Quyên tại khuôn viên trường" /><div className="portrait-label"><span>Nguyễn Tương Thị Quyên</span></div></div>
                  <div className="decision-card"><Target /><span>Think<br />Plan<br />Execute</span></div>
                </motion.div>
                <div className="scroll-note"><ArrowDown /> SCROLL TO REVIEW</div>
              </section>

              <section className="management-section section-container">
                <motion.header initial={{ opacity: 0, x: -55 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="section-heading"><span>01 / MANAGEMENT MINDSET</span><h2>Tư duy quản trị<br /><em>được rèn qua thực hành.</em></h2></motion.header>
                <div className="management-grid">
                  {[
                    { icon: Target, number: '01', title: 'Strategy', text: 'Xác định vấn đề, mục tiêu và tiêu chí thành công trước khi hành động.' },
                    { icon: BarChart3, number: '02', title: 'Insight', text: 'Biến dữ liệu và nguồn học thuật thành góc nhìn có thể sử dụng.' },
                    { icon: FolderKanban, number: '03', title: 'Execution', text: 'Phân rã công việc, kiểm soát tiến độ và tối ưu quy trình số.' },
                    { icon: Users, number: '04', title: 'People', text: 'Phối hợp minh bạch, phản hồi đúng lúc và cùng chịu trách nhiệm.' }
                  ].map(({ icon: Icon, number, title, text }, index) => <motion.article key={title} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="management-card"><span>{number}</span><Icon /><h3>{title}</h3><p>{text}</p></motion.article>)}
                </div>
              </section>

              <section className="portfolio-preview">
                <div className="section-container preview-layout">
                  <div className="preview-copy"><span>02 / COURSEWORK</span><h2>Six projects.<br /><em>One operating system.</em></h2><p>Mỗi bài tập đại diện cho một mắt xích trong hoạt động quản trị: vận hành dữ liệu, nghiên cứu thị trường, năng suất AI, quản trị dự án, thương hiệu và quản trị rủi ro.</p><button className="button sky" onClick={() => navigate('assignments')}>Mở danh mục bài tập <ArrowRight /></button></div>
                  <div className="preview-list">{assignments.map((item) => <button key={item.id} onClick={() => setSelected(item)}><span>{item.code}</span><strong>{item.title}</strong><small>{item.category}</small><ArrowRight /></button>)}</div>
                </div>
              </section>
            </motion.div>
          )}

          {tab === 'assignments' && (
            <motion.div key="assignments" {...pageTransition} className="assignments-page section-container">
              <header className="assignments-header"><div><span>02 / PROJECT PORTFOLIO</span><h1>Bài thực hành<br /><em>&amp; case studies.</em></h1></div><div><p>Sáu sản phẩm được trình bày theo góc nhìn quản trị: mục tiêu, quy trình, công cụ, bài học và toàn bộ báo cáo minh chứng.</p><div className="header-stat"><strong>6</strong><span>Business capabilities<br />documented</span></div></div></header>
              <div className="projects-grid">
                {assignments.map((item, index) => <motion.button key={item.id} onClick={() => setSelected(item)} initial={{ opacity: 0, x: index % 2 ? 45 : -45, y: 24 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: index * .07 }} className={`project-card project-${item.id}`}>
                  <div className="project-cover" style={{ backgroundColor: item.color }}><img src={`/report-pages/bai-${item.id}/page-1.png`} alt={`Trang đầu ${item.title}`} loading="lazy" /><div className="project-hover"><span>VIEW REPORT</span><ArrowRight /></div></div>
                  <div className="project-index"><span>{item.code}</span><small>{item.category}</small><small>{item.pageCount} trang</small></div>
                  <h2>{item.title}</h2><p>{item.description}</p>
                </motion.button>)}
              </div>
            </motion.div>
          )}

          {tab === 'summary' && (
            <motion.div key="summary" {...pageTransition} className="summary-page section-container">
              <header className="summary-heading"><span>03 / EXECUTIVE REVIEW</span><h1>Tổng kết một<br /><em>hành trình tăng trưởng.</em></h1><p>Sáu bài tập không chỉ tạo ra sản phẩm số; chúng hình thành cách mình quan sát vấn đề, tổ chức nguồn lực và chịu trách nhiệm với quyết định.</p></header>
              <section className="summary-dashboard">
                <motion.article initial={{ opacity: 0, x: -55 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="executive-note"><span>EXECUTIVE NOTE</span><blockquote>“Công nghệ tạo lợi thế khi người dùng biết biến dữ liệu thành insight, insight thành hành động và hành động thành giá trị.”</blockquote><LineChart /></motion.article>
                <motion.article initial={{ opacity: 0, x: 55 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="skill-report"><div className="report-title"><span>CAPABILITY REPORT</span><strong>2026</strong></div><h2>Năng lực đã tích lũy</h2><div className="skill-list">{skills.map((skill, index) => <button key={skill.name} onClick={() => setSkillIndex(index)} className={skillIndex === index ? 'active' : ''}><span>{skill.name}</span><i><b style={{ width: `${skill.level}%` }} /></i><small>{skill.level}</small></button>)}</div><motion.p key={skillIndex} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>{skills[skillIndex].description}</motion.p></motion.article>
                <motion.article initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="reflection-card"><span>RETROSPECTIVE</span><h2>Thách thức là nơi năng lực quản trị được hình thành.</h2><div><p>Khó khăn lớn nhất là chọn lọc thông tin giữa lượng dữ liệu lớn, giữ tiến độ khi làm việc nhóm và quyết định phần nào có thể giao cho AI. Qua từng bài, mình học được cách đặt câu hỏi rõ hơn, chia nhỏ công việc và kiểm tra chất lượng trước khi hoàn tất.</p><p>Portfolio giúp mình nhìn thấy sự chuyển biến từ “biết dùng công cụ” sang “biết lựa chọn và quản trị công cụ”. Đây là nền tảng quan trọng để mình tiếp tục phát triển trong lĩnh vực Quản trị kinh doanh.</p></div></motion.article>
                <motion.article initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="gratitude-card"><Heart /><span>WITH GRATITUDE</span><h2>Cảm ơn thầy cô<br /><em>đã đồng hành.</em></h2><p>Em xin chân thành cảm ơn thầy cô đã hướng dẫn và tạo cơ hội để em thực hành những năng lực số thiết thực. Những kiến thức của học phần sẽ tiếp tục hỗ trợ em trong học tập, nghiên cứu và công việc quản trị sau này.</p><button className="button light" onClick={() => navigate('home')}>Trở về trang chủ <ArrowRight /></button></motion.article>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer><div className="footer-avatar"><img src="/avatar.png" alt="Ảnh Nguyễn Tương Thị Quyên" /></div><div><strong>NGUYỄN TƯƠNG THỊ QUYÊN</strong><span>25051687 · UEB · VNU1001_E252042</span></div><span>BUSINESS PORTFOLIO © 2026</span></footer>

      <AnimatePresence>
        {selected && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.currentTarget === event.target && setSelected(null)}>
          <motion.section className="report-modal" role="dialog" aria-modal="true" aria-labelledby="report-title" initial={{ opacity: 0, y: 50, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30 }}>
            <header className="report-header"><button ref={closeRef} onClick={() => setSelected(null)} aria-label="Đóng báo cáo"><X /></button><div><span>{selected.code} · {selected.category}</span><h2 id="report-title">{selected.title}</h2></div><div className="report-links"><a href={selected.fileUrl} target="_blank" rel="noreferrer" aria-label="Mở PDF"><ExternalLink /></a><a href={selected.fileUrl} download={`Nguyen-Tuong-Thi-Quyen-Bai-${selected.id}.pdf`} aria-label="Tải PDF"><Download /></a></div></header>
            <div className="report-layout"><aside><div className="case-label">CASE SUMMARY / 0{selected.id}</div><h3>Mục tiêu</h3><p>{selected.objective}</p><h3>Quy trình</h3><ol>{selected.process.map((step) => <li key={step}>{step}</li>)}</ol><div className="tools">{selected.tools.map((tool) => <span key={tool}>{tool}</span>)}</div><div className="learning-note"><Check /><div><strong>Bài học rút ra</strong><p>{selected.lesson}</p></div></div></aside><div className="document-view"><div className="document-toolbar"><FileText /> Báo cáo đầy đủ · {selected.pageCount} trang</div><div className="page-stack">{Array.from({ length: selected.pageCount }, (_, index) => index + 1).map((page) => <figure key={page}><img src={`/report-pages/bai-${selected.id}/page-${page}.png`} alt={`Bài ${selected.id}, trang ${page}`} loading={page > 2 ? 'lazy' : 'eager'} /><figcaption>PAGE {String(page).padStart(2, '0')} / {String(selected.pageCount).padStart(2, '0')}</figcaption></figure>)}</div></div></div>
            <div className="report-navigation"><button onClick={() => moveAssignment(-1)}><ChevronLeft /> Bài trước</button><span>{selected.id} / 6</span><button onClick={() => moveAssignment(1)}>Bài tiếp theo <ChevronRight /></button></div>
          </motion.section>
        </motion.div>}
      </AnimatePresence>
    </div>
  );
}
