import React from 'react';
import ModalConductor from '../components/ModalConductor';
import SEO from '../components/SEO';
import '../css/global.css';
import NewsSection from '../sections/NewsSection';
import FooterSection from '../sections/FooterSection';
import SummarySection from '../sections/SummarySection';
import PerformanceSection from '../sections/PerformanceSection';
import ProfileSection from '../sections/ProfileSection';
import SkillSection from '../sections/SkillSection';
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
        <SummarySection setCurrentModal={this.setCurrentModal} />
        <SkillSection setCurrentModal={this.setCurrentModal} />
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
