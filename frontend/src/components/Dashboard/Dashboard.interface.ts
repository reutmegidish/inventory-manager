import { ReactNode } from "react";
import { FilterRole } from "../UserManagement/UserManagement.interface";
import { StatusType } from "../../hooks/useUserManagement";

export interface DashboardProps<T> {
  title: string;
  titleIcon: ReactNode;
  actionButton?: {
    text: string;
    icon: ReactNode;
    onClick: () => void;
  };
  onRefresh: () => void;
  data: T[];
  loading: boolean;
  error: string;
  searchPlaceholder: string;
  filterOptions: {
    role: {
      label: string;
      options: Array<{ value: string; label: string }>;
    };
    status: {
      label: string;
      options: Array<{ value: string; label: string }>;
    };
  };
  columns: Array<{
    id: keyof T | "actions";
    label: string;
    sortable?: boolean;
    render?: (item: T) => ReactNode;
  }>;
  getRowActions: (item: T) => Array<{
    icon: ReactNode;
    tooltip: string;
    onClick: () => void;
    color?: string;
  }>;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  roleFilter: string;
  onRoleFilterChange: (value: FilterRole) => void;
  statusFilter: string;
  onStatusFilterChange: (value: StatusType) => void;
  orderBy: keyof T;
  order: "asc" | "desc";
  onSort: (property: keyof T) => void;
  totalItems: number;
}
