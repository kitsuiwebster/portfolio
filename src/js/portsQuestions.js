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