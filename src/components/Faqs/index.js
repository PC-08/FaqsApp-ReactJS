// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {
    flist: [
      {
        id: 0,
        questionText: 'What is IRC?',
        open: false,
        answerText:
          'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
      },
      {
        id: 1,
        questionText: 'What is the medium of instruction?',
        open: false,
        answerText:
          'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
      },
      {
        id: 2,
        questionText:
          'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
        open: false,
        answerText:
          'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
      },
      {
        id: 3,
        questionText: 'How will my doubts be cleared? What is the mechanism?',
        open: false,
        answerText:
          'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
      },
    ],
  }

  onClickimg = uid => {
    this.setState(prevState => ({
      flist: prevState.flist.map(eachfaq => {
        if (uid === eachfaq.id) {
          return {...eachfaq, open: !eachfaq.open}
        }
        return eachfaq
      }),
    }))
  }

  render() {
    const {flist} = this.state
    console.log(flist)
    return (
      <div className="bg">
        <div className="card">
          <h1 className="head">FAQs</h1>
          <ul className="ul">
            {flist.map(eachfaq => (
              <FaqItem
                key={eachfaq.id}
                uid={eachfaq.id}
                questionText={eachfaq.questionText}
                answerText={eachfaq.answerText}
                onClickimg={this.onClickimg}
                open={eachfaq.open}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
