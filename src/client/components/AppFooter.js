import React from "react"
import { CFooter } from "@coreui/react"

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="text-muted">
          Version: {VENUS_INFLUX_LOADER_BUILD_VERSION}
        </span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a
          href="https://www.victronenergy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Victron Energy
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
