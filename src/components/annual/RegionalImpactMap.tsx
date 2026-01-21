// components/annual/DownloadSection.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  FileText,
  PieChart,
  Image as ImageIcon,
  Video,
  ExternalLink,
  Printer,
  Mail,
  Share2,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const DownloadSection: React.FC = () => {
  const [downloadProgress, setDownloadProgress] = useState<{
    [key: string]: number;
  }>({});

  const handleDownload = (fileId: string) => {
    setDownloadProgress({ ...downloadProgress, [fileId]: 0 });

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        const newProgress = (prev[fileId] || 0) + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloadProgress((prev) => ({ ...prev, [fileId]: 0 }));
          }, 1000);
        }
        return { ...prev, [fileId]: newProgress };
      });
    }, 100);
  };

  const downloadFiles = [
    {
      id: "full-report",
      title: "Full Annual Report",
      description: "Complete 86-page PDF report with all data and analysis",
      size: "24.5 MB",
      format: "PDF",
      icon: FileText,
      color: "from-red-500 to-pink-500",
      downloads: 1284,
      updated: "Mar 15, 2024",
    },
    {
      id: "executive-summary",
      title: "Executive Summary",
      description: "10-page summary of key findings and recommendations",
      size: "3.2 MB",
      format: "PDF",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      downloads: 856,
      updated: "Mar 15, 2024",
    },
    {
      id: "data-pack",
      title: "Data Pack",
      description: "Complete dataset in Excel format for further analysis",
      size: "8.7 MB",
      format: "Excel",
      icon: FileText,
      color: "from-emerald-500 to-green-500",
      downloads: 342,
      updated: "Mar 15, 2024",
    },
    {
      id: "infographics",
      title: "Infographics Pack",
      description: "High-resolution infographics and charts",
      size: "15.3 MB",
      format: "ZIP",
      icon: ImageIcon,
      color: "from-purple-500 to-pink-500",
      downloads: 567,
      updated: "Mar 14, 2024",
    },
    {
      id: "presentation",
      title: "Presentation Deck",
      description: "Ready-to-use PowerPoint presentation",
      size: "12.8 MB",
      format: "PowerPoint",
      icon: FileText,
      color: "from-amber-500 to-orange-500",
      downloads: 423,
      updated: "Mar 13, 2024",
    },
    {
      id: "video-summary",
      title: "Video Summary",
      description: "5-minute summary video for social sharing",
      size: "48.2 MB",
      format: "MP4",
      icon: Video,
      color: "from-violet-500 to-purple-500",
      downloads: 912,
      updated: "Mar 12, 2024",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Download Resources
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Access the complete annual report and supplementary materials in
          various formats
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {downloadFiles.map((file, index) => (
          <motion.div
            key={file.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group relative overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-br ${file.color} flex items-center justify-center`}
                  >
                    <file.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                    {file.format}
                  </Badge>
                </div>

                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {file.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {file.description}
                </p>

                {/* Download Progress */}
                {downloadProgress[file.id] > 0 &&
                  downloadProgress[file.id] < 100 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                        <span>Downloading...</span>
                        <span>{downloadProgress[file.id]}%</span>
                      </div>
                      <Progress
                        value={downloadProgress[file.id]}
                        className="h-2"
                      />
                    </div>
                  )}

                {/* Success State */}
                {downloadProgress[file.id] === 100 && (
                  <div className="mb-4 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        Download complete!
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <span>{file.size}</span>
                  <span>{file.downloads.toLocaleString()} downloads</span>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => handleDownload(file.id)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  >
                    {downloadProgress[file.id] > 0 &&
                    downloadProgress[file.id] < 100 ? (
                      <>Downloading...</>
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </>
                    )}
                  </Button>
                  <Button variant="outline" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Additional Options */}
      <Card className="border border-gray-200 dark:border-gray-800">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                <Printer className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Print Report
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Order professional print copies
              </p>
              <Button variant="outline" size="sm">
                Request Copies
              </Button>
            </div>

            <div className="text-center p-6 border-x border-gray-200 dark:border-gray-800">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Email Updates
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Get future reports delivered
              </p>
              <Button variant="outline" size="sm">
                Subscribe
              </Button>
            </div>

            <div className="text-center p-6">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
                <Share2 className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Share Report
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Share with your network
              </p>
              <Button variant="outline" size="sm">
                Share Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DownloadSection;
