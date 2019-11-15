/*
 * Copyright 2019 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './dashboardItem.scss';

const cx = classNames.bind(styles);

export const DashboardItem = ({ dashboard, onClick, active }) => {
  const { name } = dashboard;
  return (
    <div
      className={cx('dashboard-item', {
        active,
      })}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

DashboardItem.defaultProps = {
  onClick: () => {},
  active: false,
  dashboard: {},
};

DashboardItem.propTypes = {
  dashboard: PropTypes.object,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};
