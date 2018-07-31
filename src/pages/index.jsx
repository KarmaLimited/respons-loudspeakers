import React from 'react';
import ModalConductor from '../components/ModalConductor';
import SEO from '../components/SEO';
import '../css/global.css';
import NewsSection from '../sections/NewsSection';
import FooterSection from '../sections/FooterSection';
import AboutSection from '../sections/AboutSection';
import PerformanceSection from '../sections/PerformanceSection';
import ProfileSection from '../sections/ProfileSection';
import TestSection from '../sections/TestSection';
import TopSection from '../sections/TopSection';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentModal: null,
    };

    this.setCurrentModal = this.setCurrentModal.bind(this);
  }

  setCurrentModal(target) {
    this.setState({
      currentModal: target,
    });
  }

  render() {
    return (
      <div>
        {this.state.currentModal && (
          <ModalConductor
            currentModal={this.state.currentModal}
            setCurrentModal={this.setCurrentModal}
          />
        )}

        <TopSection />
        <AboutSection setCurrentModal={this.setCurrentModal} />
        <TestSection setCurrentModal={this.setCurrentModal} />
        <PerformanceSection />
        <ProfileSection />
        <NewsSection />
        <FooterSection setCurrentModal={this.setCurrentModal} />

        <SEO />
      </div>
    );
  }
}

export default IndexPage;
