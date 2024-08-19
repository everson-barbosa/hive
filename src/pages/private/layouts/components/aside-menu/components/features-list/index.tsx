import { FeatureItem } from "./components/feature-item";

export function FeaturesList() {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        <FeatureItem name="Artigos" icon="articles" />
      </ul>
    </div>
  )
}