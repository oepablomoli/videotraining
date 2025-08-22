import VideoPlayer from './VideoPlayer';
import DocumentGrid from './DocumentGrid';
import type { TrainingModule as TrainingModuleType } from '../types/training';

interface TrainingModuleProps {
  trainingModule: TrainingModuleType;
}

const TrainingModule = ({ trainingModule }: TrainingModuleProps) => {
  return (
    <div className="space-y-10">
      {/* Video Player Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{trainingModule.title}</h2>
        <VideoPlayer vimeoId={trainingModule.vimeoId} title={trainingModule.title} />
      </div>

      {/* Documents Section */}
      <DocumentGrid documents={trainingModule.documents} />
    </div>
  );
};

export default TrainingModule;
