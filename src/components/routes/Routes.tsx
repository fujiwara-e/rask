import { useRoutes } from 'react-router-dom'
import { path } from '@/constants/application'
import { Welcome } from '@/components/pages/Welcome'
import { Container } from '@/components/layout/Container'

export const Routes = () => {
  return useRoutes([
    {
      path: path.root(),
      element: <Container />,
      children: [
        {
          path: path.welcome(),
          element: <Welcome />,
        },
      ],
    },
  ])
}
