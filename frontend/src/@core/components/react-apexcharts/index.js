// ! To avoid 'Window is not defined' error
const ReactApexcharts = (() => import('react-apexcharts'), { ssr: false })

export default ReactApexcharts
