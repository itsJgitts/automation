export const a11yConfig = {
    runOnly: {
      type: 'tag',
      // Custom rules from the WCAG A/AA 2.1 + best practices
      values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice']
    },
    reportViolations: true,
    detailedReport: true,
    detailedReportOptions: { html: true },
    includedImpacts: ['minor', 'moderate', 'serious', 'critical'],
    context: '#root'
  }
  export const VIEWPORTS: {
    small: { width: number; height: number }
    large: { width: number; height: number }
  } = {
    small: {
      width: 576,
      height: 800
    },
    large: {
      width: 1400,
      height: 800
    }
  }