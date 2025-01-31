import { useState } from "react"
import { Filters, Ticket } from "../core/types"

export default function useFilters() {
  const [filters, setFilters] = useState<Filters<Ticket>>({})

  function toggleFilter<T extends Ticket>({
    key,
    value,
  }: {
    key: keyof T
    value: T[keyof T]
  }) {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters } as Filters<T>

      if (newFilters[key] && filters[key]?.includes(value)) {
        return {
          ...newFilters,
          [key]: newFilters[key]?.filter((v) => v !== value),
        }
      } else {
        return {
          ...newFilters,
          [key]: [...(newFilters[key] || []), value],
        }
      }
    })
  }

  function isFilterActive<T extends Ticket>({
    key,
    value,
  }: {
    key: keyof T
    value: T[keyof T]
  }): boolean {
    return filters[key]?.includes(value) || false
  }

  return { filters, toggleFilter, isFilterActive }
}
