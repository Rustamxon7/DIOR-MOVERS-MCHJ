import { useTranslation } from 'react-i18next';

import './Faq.scss';
import { IoChevronDown } from 'react-icons/io5';
import { useState } from 'react';

const questions = [
  {
    title: 'How to Use 1?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
  },
  {
    title: 'How to Use 2?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
  },
  {
    title: 'How to Use 3?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
  },
  {
    title: 'How to Use 4?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
  },
  {
    title: 'How to Use 5?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
  },
];

const Faq = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const { t } = useTranslation();

  return (
    <div className="faq-section">
      <div className="container container--center-v">
        <h2 className="subheading">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="heading-secondary">
          Find you way otherview I cannot help you to find.
        </p>
      </div>
      <div className="container container--faq">
        <div className={`faq${open1 === true ? ' faq--open' : ''}`}>
          <div className="faq__header" onClick={() => setOpen1((pre) => !pre)}>
            <span>{questions[0].title}</span>
            <IoChevronDown />
          </div>
          <div className="faq__content">{questions[0].content}</div>
        </div>

        <div className={`faq${open2 === true ? ' faq--open' : ''}`}>
          <div className="faq__header" onClick={() => setOpen2((pre) => !pre)}>
            <span>{questions[1].title}</span>
            <IoChevronDown />
          </div>
          <div className="faq__content">{questions[1].content}</div>
        </div>

        <div className={`faq${open3 === true ? ' faq--open' : ''}`}>
          <div className="faq__header" onClick={() => setOpen3((pre) => !pre)}>
            <span>{questions[2].title}</span>
            <IoChevronDown />
          </div>
          <div className="faq__content">{questions[2].content}</div>
        </div>

        <div className={`faq${open4 === true ? ' faq--open' : ''}`}>
          <div className="faq__header" onClick={() => setOpen4((pre) => !pre)}>
            <span>{questions[3].title}</span>
            <IoChevronDown />
          </div>
          <div className="faq__content">{questions[3].content}</div>
        </div>

        <div className={`faq${open5 === true ? ' faq--open' : ''}`}>
          <div className="faq__header" onClick={() => setOpen5((pre) => !pre)}>
            <span>{questions[4].title}</span>
            <IoChevronDown />
          </div>
          <div className="faq__content">{questions[4].content}</div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
