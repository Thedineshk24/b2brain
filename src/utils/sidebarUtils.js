
import {
    TeamOutlined,
    UserOutlined,
    HomeOutlined,
    StarOutlined,
    BookOutlined,
    SettingOutlined,
    LinkOutlined,
    WechatOutlined
} from '@ant-design/icons';

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

export const items = [
    getItem('Dashboard', '1', <HomeOutlined />),
    getItem('Intels', '2', <StarOutlined />),
    getItem('Leads', '3', <UserOutlined />),
    getItem('Accounts', 'sub1', <BookOutlined />, [
        getItem('Manage all Track new accounts Bulk Import', '4'),
    ]),
    getItem('Preferences', 'sub2', <SettingOutlined />,
        [getItem('Product Focus Intel Preferences Lead Persona', '5')]),
    getItem('Integrations', '6', <LinkOutlined />),
    getItem('Team', '7', <TeamOutlined />),
    getItem('Help / Support', '8', <WechatOutlined />),
];

