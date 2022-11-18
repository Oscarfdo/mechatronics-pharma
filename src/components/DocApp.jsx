import { AuthProvider } from "../Auth/Context/AuthProvider"
import { AppRoutes } from "../Router/AppRoutes"
import { AppTheme } from "../theme"

export const DocApp = () => {
  return (
    
    <AuthProvider>
      <AppTheme>
          <AppRoutes/>
      </AppTheme>
    </AuthProvider>
  )
}
