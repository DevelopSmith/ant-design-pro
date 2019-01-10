import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Row, Col, Card, Tooltip, Button } from 'antd';
import { Pie, WaterWave, Gauge, TagCloud } from '@/components/Charts';
import NumberInfo from '@/components/NumberInfo';
import CountDown from '@/components/CountDown';
import ActiveChart from '@/components/ActiveChart';
import numeral from 'numeral';
import GridContent from '@/components/PageHeaderWrapper/GridContent';

import Authorized from '@/utils/Authorized';
import styles from './Monitor.less';

const { Secured } = Authorized;
const innerCircle = {
  width: 10,
  height: 10,
  borderRadius: '100%',
  backgroundColor: '#fff',
  marginRight: 8,
};
const blackBtn = {
  borderRadius: 50,
  background: '#000',
  color: '#fff',
  margin: '15px auto 0px',
  display: 'table',
};

const targetTime = new Date().getTime() + 3900000;

// use permission as a parameter
const havePermissionAsync = new Promise(resolve => {
  // Call resolve on behalf of passed
  setTimeout(() => resolve(), 300);
});

@Secured(havePermissionAsync)
@connect(({ monitor, loading }) => ({
  monitor,
  loading: loading.models.monitor,
}))
class Dashboard extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'monitor/fetchTags',
    });
  }

  render() {
    const { monitor, loading } = this.props;
    const { tags } = monitor;

    return (
      <GridContent>
        <Row gutter={24}>
          <Col xl={24} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title={
                <FormattedMessage
                  id="app.monitor.trading-activity"
                  defaultMessage="How it works?"
                />
              }
              bordered={false}
            >
              <div className={styles.dashboardImgPlaceholder}>ONE BIG IMAGE</div>

              <Button href="http://app.facedab.com/create-campaign" style={blackBtn}>
                <i style={innerCircle} />
                Create Campaign
              </Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xl={12} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title={
                <FormattedMessage
                  id="app.monitor.proportion-per-category"
                  defaultMessage="Online Top Search"
                />
              }
              bordered={false}
              className={styles.pieCard}
            >
              <div className={styles.dashboardImgPlaceholder}>ONE BIG IMAGE</div>
            </Card>
          </Col>
          <Col xl={12} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title={
                <FormattedMessage
                  id="app.monitor.popular-searches"
                  defaultMessage="Popular Searches"
                />
              }
              loading={loading}
              bordered={false}
              bodyStyle={{ overflow: 'hidden' }}
            >
              <div className={styles.dashboardImgPlaceholder}>ONE BIG IMAGE</div>
            </Card>
          </Col>
        </Row>
      </GridContent>
    );
  }
}

export default Dashboard;
