// are you still cheating? yes you still are.
// but remember nobody cares since the main purpose of this page is to enhance knowledge rather than anything else.

import dnsPort from '../assets/images/ports/dns.png';
import sshPort from '../assets/images/ports/ssh.png';
import dhcpPort from '../assets/images/ports/dhcp.png';

export const initialQuestions = [
    {
        imageUrl: dnsPort,
        answer: '53',
        port: '53 DNS',
        name: 'DNS (Domain Name System)'
    },
    {
        imageUrl: sshPort,
        answer: '22',
        port: '22 SSH',
        name: 'SSH (Secure Shell)'
    },
    {
        imageUrl: dhcpPort,
        answer: '67/68',
        port: '67/68 DHCP',
        name: 'DHCP (Dynamic Host Configuration Protocol)'
    }
];