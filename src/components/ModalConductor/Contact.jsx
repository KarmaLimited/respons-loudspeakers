/* eslint-disable no-alert */

import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import { PulseLoader } from 'react-spinners';
import closeSvg from '../../icons/close.svg';

const propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      mail: '',
      message: 'write me a message here',
      isSending: false,
      isSent: false,
      resultMessage: '',
    };

    this.closeModal = this.closeModal.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.requestInterceptor = axios.interceptors.request.use(config => {
      this.setState({
        isSending: true,
      });
      return config;
    });
  }

  componentWillUnmount() {
    axios.interceptors.request.eject(this.requestInterceptor);
  }

  onClickSubmit() {
    const mailContent = JSON.stringify({
      subject: '【問合せ】yuuni-webサイトより',
      body: `■名前：\n${this.state.name}\n\n■メール：\n${
        this.state.mail
      }\n\n■内容：\n${this.state.message}\n\n`,
    });

    axios({
      method: 'post',
      url:
        'https://3vejp046g6.execute-api.ap-northeast-1.amazonaws.com/production/submit',
      data: mailContent,
    })
      .then(() => {
        this.setState({
          isSent: true,
          resultMessage: 'Message sent',
        });
      })
      .catch(err => {
        window.alert('Message was not sent');
        this.setState({
          isSending: false,
        });
        window.Raven.captureException(err);
      });
  }

  closeModal() {
    if (this.state.isSent) {
      this.props.setCurrentModal(null);
      return;
    }

    if (window.confirm('Message was not sent...')) {
      this.props.setCurrentModal(null);
    }
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const styles = {
      modalOverlay: {
        alignItems: 'center',
        background: 'rgba(64,64,64,0.7)',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 500,
      },
      modalContent: {
        bottom: 'auto',
        color: '#999999',
        left: 'auto',
        margin: '1rem',
        maxHeight: '90vh',
        maxWidth: '600px',
        padding: '34px',
        position: 'relative',
        right: 'auto',
        top: 'auto',
      },
      nameMailContainer: {
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width:600px)': {
          flexDirection: 'row',
        },
      },
      nameMailItem: {
        flex: 1,
        marginBottom: '16px',
        '@media (min-width:600px)': {
          ':first-child': {
            marginRight: '30px',
          },
        },
      },
      input: {
        background: 'rgba(0, 0, 0, 0.01)',
        border: '1px solid #999999',
        boxShadow: 'inset 1px 2px 3px rgba(0, 0, 0, 0.1)',
        padding: '10px',
        width: '100%',
      },
      textArea: {
        background: 'rgba(0, 0, 0, 0.01)',
        border: '1px solid #999999',
        boxShadow: 'inset 1px 2px 3px rgba(0, 0, 0, 0.1)',
        height: '200px',
        marginBottom: '30px',
        padding: '10px',
        width: '100%',
      },
      button: {
        background: 'rgba(56,59,64,0.54)',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        cursor: 'pointer',
        display: 'block',
        height: '41px',
        margin: 'auto',
        width: '94px',
      },
      closeButton: {
        background: `url(${closeSvg})`,
        border: 0,
        boxSizing: 'border-box',
        cursor: 'pointer',
        height: '18px',
        padding: 0,
        position: 'absolute',
        right: '1rem',
        top: '1rem',
        width: '18px',
      },
    };

    return (
      <ReactModal
        isOpen
        closeTimeoutMS={100}
        onRequestClose={this.closeModal}
        style={{
          overlay: styles.modalOverlay,
          content: styles.modalContent,
        }}
        ariaHideApp={false}
      >
        <button css={styles.closeButton} onClick={this.closeModal} />

        {this.state.isSent ? (
          <div>
            <p>{this.state.resultMessage}</p>
            <button
              onClick={() => this.props.setCurrentModal(null)}
              css={styles.button}
            >
              閉じる
            </button>
          </div>
        ) : (
          <div>
            <h2>Contact</h2>
            <div css={styles.nameMailContainer}>
              <label css={styles.nameMailItem} htmlFor="name">
                お名前：
                <input
                  name="name"
                  onChange={this.handleInputChange}
                  value={this.state.name}
                  css={styles.input}
                />
              </label>

              <label css={styles.nameMailItem} htmlFor="mail">
                メールアドレス：
                <input
                  name="mail"
                  onChange={this.handleInputChange}
                  value={this.state.mail}
                  css={styles.input}
                  type="email"
                />
              </label>
            </div>

            <label htmlFor="message">
              contact respons loudspeaker：
              <textarea
                name="message"
                onChange={this.handleInputChange}
                value={this.state.message}
                css={styles.textArea}
              />
            </label>

            <button onClick={this.onClickSubmit} css={styles.button}>
              {this.state.isSending ? (
                <PulseLoader color="#fff" loading size={9} />
              ) : (
                'Send'
              )}
            </button>
          </div>
        )}
      </ReactModal>
    );
  }
}

Contact.propTypes = propTypes;

export default Contact;
