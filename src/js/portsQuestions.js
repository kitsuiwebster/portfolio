// are you still cheating? yes you still are.
// but remember nobody cares since the main purpose of this page is to enhance knowledge rather than anything else.

import dnsPort from '../assets/images/ports/dns.webp';
import sshPort from '../assets/images/ports/ssh.webp';
import dhcpPort from '../assets/images/ports/dhcp.webp';
import telnetPort from '../assets/images/ports/telnet.webp';
import rdpPort from '../assets/images/ports/rdp.webp';
import pop3Port from '../assets/images/ports/pop3.webp';
import imapPort from '../assets/images/ports/imap.webp';
import smtpPort from '../assets/images/ports/smtp.webp';
import httpPort from '../assets/images/ports/http.webp';
import httpsPort from '../assets/images/ports/https.webp';
import ftpPort from '../assets/images/ports/ftp.webp';
import scpPort from '../assets/images/ports/scp.webp';
import sftpPort from '../assets/images/ports/sftp.webp';

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
    },
    {
        imageUrl: ftpPort,
        answer: '20/21',
        port: '20/21 FTP',
        name: 'FTP (File Transfer Protocol)'
    },
    {
        imageUrl: rdpPort,
        answer: '3389',
        port: '3389 RDP',
        name: 'RDP (Remote Desktop Protocol)'
    },
    {
        imageUrl: httpPort,
        answer: '80',
        port: '80 HTTP',
        name: 'HTTP (HyperText Transfer Protocol)'
    },
    {
        imageUrl: httpsPort,
        answer: '443',
        port: '443 HTTPS',
        name: 'HTTPS (HyperText Transfer Protocol Secure)'
    },
    {
        imageUrl: telnetPort,
        answer: '23',
        port: '23 Telnet',
        name: 'Telnet (Teletype Network)'
    },
    {
        imageUrl: imapPort,
        answer: '143',
        port: '143 IMAP',
        name: 'IMAP (Internet Message Access Protocol)'
    },
    {
        imageUrl: pop3Port,
        answer: '110',
        port: '110 POP3',
        name: 'POP3 (Post Office Protocol 3)'
    }
    ,
    {
        imageUrl: smtpPort,
        answer: '25',
        port: '25 SMTP',
        name: 'SMTP (Simple Mail Transfer Protocol)'
    },
    {
        imageUrl: scpPort,
        answer: '22',
        port: '22 SCP',
        name: 'SCP (Secure Copy Protocol)'
    },
    {
        imageUrl: sftpPort,
        answer: '22',
        port: '22 SFTP',
        name: 'SFTP (Secure File Transfer Protocol)'
    }
];