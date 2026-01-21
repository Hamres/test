import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line test-eslint-plugin-v1/layer-imports
import { UserRole } from '@/entities/User';

export type AppRouterProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}
