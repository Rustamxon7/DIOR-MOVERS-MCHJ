import './Faq.scss';
import { IoChevronDown } from 'react-icons/io5';

const questions = [
  {
    title: 'How to Use',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
  },
  {
    title: 'How to Use',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
  },
  {
    title: 'How to Use',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
  },
  {
    title: 'How to Use',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
  },
  {
    title: 'How to Use',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
  },
];

const Faq = () => {
  return (
    <div className='faq-section'>
      <div className='container container--center-v'>
        <h2 className='subheading'>FREQUENTLY ASKED QUESTIONS</h2>
        <p className='heading-secondary'>
          Find you way otherview I cannot help you to find.
        </p>
      </div>
      <div className='container container--faq'>
        <div className='faq'>
          <div className='faq__header'>
            <span>How to Use</span>
            <IoChevronDown />
          </div>
          <div className='faq__content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
