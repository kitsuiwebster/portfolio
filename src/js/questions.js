import continuePng from '../assets/images/errors/continue.png';
import switchingProtocols from '../assets/images/errors/switching-protocols.png';
import processing from '../assets/images/errors/processing.png';
import earlyHints from '../assets/images/errors/early-hints.png';
import ok from '../assets/images/errors/ok.png';
import created from '../assets/images/errors/created.png';
import accepted from '../assets/images/errors/accepted.png';
import nonAuthoritativeInformation from '../assets/images/errors/non-authoritative-information.png';
import noContent from '../assets/images/errors/no-content.png';
import resetContent from '../assets/images/errors/reset-content.png';
import partialContent from '../assets/images/errors/partial-content.png';
import multiStatus from '../assets/images/errors/multi-status.png';
import alreadyReported from '../assets/images/errors/already-reported.png';
import imUsed from '../assets/images/errors/im-used.png';
import multipleChoices from '../assets/images/errors/multiple-choices.png';
import movedPermanently from '../assets/images/errors/moved-permanently.png';
import found from '../assets/images/errors/found.png';
import seeOther from '../assets/images/errors/see-other.png';
import notModified from '../assets/images/errors/not-modified.png';
import useProxy from '../assets/images/errors/use-proxy.png';
import temporaryRedirect from '../assets/images/errors/temporary-redirect.png';
import permanentRedirect from '../assets/images/errors/permanent-redirect.png';
import badRequest from '../assets/images/errors/bad-request.png';
import unauthorized from '../assets/images/errors/unauthorized.png';
import paymentRequired from '../assets/images/errors/payment-required.png';
import forbidden from '../assets/images/errors/forbidden.png';
import notFound from '../assets/images/errors/not-found.png';
import methodNotAllowed from '../assets/images/errors/method-not-allowed.png';
import notAcceptable from '../assets/images/errors/not-acceptable.png';
import proxyAuthenticationRequired from '../assets/images/errors/proxy-authentication-required.png';
import requestTimeout from '../assets/images/errors/request-timeout.png';
import conflict from '../assets/images/errors/conflict.png';
import gone from '../assets/images/errors/gone.png';
import lengthRequired from '../assets/images/errors/length-required.png';
import preconditionFailed from '../assets/images/errors/precondition-failed.png';
import payloadTooLarge from '../assets/images/errors/payload-too-large.png';
import uriTooLong from '../assets/images/errors/uri-too-long.png';
import unsupportedMediaType from '../assets/images/errors/unsupported-media-type.png';
import rangeNotSatisfiable from '../assets/images/errors/range-not-satisfiable.png';
import expectationFailed from '../assets/images/errors/expectation-failed.png';
import imATeapot from '../assets/images/errors/im-a-teapot.png';
import misdirectedRequest from '../assets/images/errors/misdirected-request.png';
import unprocessableContent from '../assets/images/errors/unprocessable-content.png';
import locked from '../assets/images/errors/locked.png';
import failedDependency from '../assets/images/errors/failed-dependency.png';
import tooEarly from '../assets/images/errors/too-early.png';
import upgradeRequired from '../assets/images/errors/upgrade-required.png';
import preconditionRequired from '../assets/images/errors/precondition-required.png';
import tooManyRequests from '../assets/images/errors/too-many-requests.png';
import requestHeaderFieldsTooLarge from '../assets/images/errors/request-header-fields-too-large.png';
import unavailableForLegalReasons from '../assets/images/errors/unavailable-for-legal-reasons.png';
import internalServerError from '../assets/images/errors/internal-server-error.png';
import notImplemented from '../assets/images/errors/not-implemented.png';
import badGateway from '../assets/images/errors/bad-gateway.png';
import serviceUnavailable from '../assets/images/errors/service-unavailable.png';
import gatewayTimeout from '../assets/images/errors/gateway-timeout.png';
import httpVersionNotSupported from '../assets/images/errors/http-version-not-supported.png';
import variantAlsoNegotiates from '../assets/images/errors/variant-also-negotiates.png';
import insufficientStorage from '../assets/images/errors/insufficient-storage.png';
import loopDetected from '../assets/images/errors/loop-detected.png';
import notExtended from '../assets/images/errors/not-extended.png';
import networkAuthenticationRequired from '../assets/images/errors/network-authentication-required.png';


export const initialQuestions = [
    {
        imageUrl: continuePng,
        answer: '100',
        errorCode: '100 Continue',
    },
    {
        imageUrl: switchingProtocols,
        answer: '101',
        errorCode: '101 Switching Protocols',
    },
    {
        imageUrl: processing,
        answer: '102',
        errorCode: '102 Processing',
    },
    {
        imageUrl: earlyHints,
        answer: '103',
        errorCode: '103 Early Hints',
    },
    {
        imageUrl: ok,
        answer: '200',
        errorCode: '200 OK',
    },
    {
        imageUrl: created,
        answer: '201',
        errorCode: '201 Created',
    },
    {
        imageUrl: accepted,
        answer: '202',
        errorCode: '202 Accepted',
    },
    {
        imageUrl: nonAuthoritativeInformation,
        answer: '203',
        errorCode: '203 Non-Authoritative Information',
    },
    {
        imageUrl: noContent,
        answer: '204',
        errorCode: '204 No Content',
    },
    {
        imageUrl: resetContent,
        answer: '205',
        errorCode: '205 Reset Content',
    },
    {
        imageUrl: partialContent,
        answer: '206',
        errorCode: '206 Partial Content',
    },
    {
        imageUrl: multiStatus,
        answer: '207',
        errorCode: '207 Multi-Status',
    },
    {
        imageUrl: alreadyReported,
        answer: '208',
        errorCode: '208 Already Reported',
    },
    {
        imageUrl: imUsed,
        answer: '226',
        errorCode: '226 IM Used',
    },
    {
        imageUrl: multipleChoices,
        answer: '300',
        errorCode: '300 Multiple Choices',
    },
    {
        imageUrl: movedPermanently,
        answer: '301',
        errorCode: '301 Moved Permanently',
    },
    {
        imageUrl: found,
        answer: '302',
        errorCode: '302 Found',
    },
    {
        imageUrl: seeOther,
        answer: '303',
        errorCode: '303 See Other',
    },
    {
        imageUrl: notModified,
        answer: '304',
        errorCode: '304 Not Modified',
    },
    {
        imageUrl: useProxy,
        answer: '305',
        errorCode: '305 Use Proxy',
    },
    {
        imageUrl: temporaryRedirect,
        answer: '307',
        errorCode: '307 Temporary Redirect',
    },
    {
        imageUrl: permanentRedirect,
        answer: '308',
        errorCode: '308 Permanent Redirect',
    },
    {
        imageUrl: badRequest,
        answer: '400',
        errorCode: '400 Bad Request',
    },
    {
        imageUrl: unauthorized,
        answer: '401',
        errorCode: '401 Unauthorized',
    },
    {
        imageUrl: paymentRequired,
        answer: '402',
        errorCode: '402 Payment Required',
    },
    {
        imageUrl: forbidden,
        answer: '403',
        errorCode: '403 Forbidden',
    },
    {
        imageUrl: notFound,
        answer: '404',
        errorCode: '404 Not Found',
    },
    {
        imageUrl: methodNotAllowed,
        answer: '405',
        errorCode: '405 Method Not Allowed',
    },
    {
        imageUrl: notAcceptable,
        answer: '406',
        errorCode: '406 Not Acceptable',
    },
    {
        imageUrl: proxyAuthenticationRequired,
        answer: '407',
        errorCode: '407 Proxy Authentication Required',
    },
    {
        imageUrl: requestTimeout,
        answer: '408',
        errorCode: '408 Request Timeout',
    },
    {
        imageUrl: conflict,
        answer: '409',
        errorCode: '409 Conflict',
    },
    {
        imageUrl: gone,
        answer: '410',
        errorCode: '410 Gone',
    },
    {
        imageUrl: lengthRequired,
        answer: '411',
        errorCode: '411 Length Required',
    },
    {
        imageUrl: preconditionFailed,
        answer: '412',
        errorCode: '412 Precondition Failed',
    },
    {
        imageUrl: payloadTooLarge,
        answer: '413',
        errorCode: '413 Payload Too Large',
    },
    {
        imageUrl: uriTooLong,
        answer: '414',
        errorCode: '414 URI Too Long',
    },
    {
        imageUrl: unsupportedMediaType,
        answer: '415',
        errorCode: '415 Unsupported Media Type',
    },
    {
        imageUrl: rangeNotSatisfiable,
        answer: '416',
        errorCode: '416 Range Not Satisfiable',
    },
    {
        imageUrl: expectationFailed,
        answer: '417',
        errorCode: '417 Expectation Failed',
    },
    {
        imageUrl: imATeapot,
        answer: '418',
        errorCode: "418 I'm a teapot",
    },
    {
        imageUrl: misdirectedRequest,
        answer: '421',
        errorCode: '421 Misdirected Request',
    },
    {
        imageUrl: unprocessableContent,
        answer: '422',
        errorCode: '422 Unprocessable Content',
    },
    {
        imageUrl: locked,
        answer: '423',
        errorCode: '423 Locked',
    },
    {
        imageUrl: failedDependency,
        answer: '424',
        errorCode: '424 Failed Dependency',
    },
    {
        imageUrl: tooEarly,
        answer: '425',
        errorCode: '425 Too Early',
    },
    {
        imageUrl: upgradeRequired,
        answer: '426',
        errorCode: '426 Upgrade Required',
    },
    {
        imageUrl: preconditionRequired,
        answer: '428',
        errorCode: '428 Precondition Required',
    },
    {
        imageUrl: tooManyRequests,
        answer: '429',
        errorCode: '429 Too Many Requests',
    },
    {
        imageUrl: requestHeaderFieldsTooLarge,
        answer: '431',
        errorCode: '431 Request Header Fields Too Large',
    },
    {
        imageUrl: unavailableForLegalReasons,
        answer: '451',
        errorCode: '451 Unavailable For Legal Reasons',
    },
    {
        imageUrl: internalServerError,
        answer: '500',
        errorCode: '500 Internal Server Error',
    },
    {
        imageUrl: notImplemented,
        answer: '501',
        errorCode: '501 Not Implemented',
    },
    {
        imageUrl: badGateway,
        answer: '502',
        errorCode: '502 Bad Gateway',
    },
    {
        imageUrl: serviceUnavailable,
        answer: '503',
        errorCode: '503 Service Unavailable',
    },
    {
        imageUrl: gatewayTimeout,
        answer: '504',
        errorCode: '504 Gateway Timeout',
    },
    {
        imageUrl: httpVersionNotSupported,
        answer: '505',
        errorCode: '505 HTTP Version Not Supported',
    },
    {
        imageUrl: variantAlsoNegotiates,
        answer: '506',
        errorCode: '506 Variant Also Negotiates',
    },
    {
        imageUrl: insufficientStorage,
        answer: '507',
        errorCode: '507 Insufficient Storage',
    },
    {
        imageUrl: loopDetected,
        answer: '508',
        errorCode: '508 Loop Detected',
    },
    {
        imageUrl: notExtended,
        answer: '510',
        errorCode: '510 Not Extended',
    },
    {
        imageUrl: networkAuthenticationRequired,
        answer: '511',
        errorCode: '511 Network Authentication Required',
    },
];
